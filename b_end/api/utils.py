from .models import *
from .serializers import CartSerializer


def CartData(request):

    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(
            customer=customer, complete=False)
        items = get_cart_items(request, order)
        cartTotal = get_cart_total(request, order)
        cartQuantity = get_cart_quantity(request, order)
    else:
        cookieData = cookieCart(request)
        items = cookieData['items']
        cartQuantity = cookieData['cartQuantity']
        cartTotal = cookieData['cartTotal']

    return {'items': items, 'cartQuantity': cartQuantity, 'cartTotal': cartTotal}


def cookieCart(request):

    # Get cart cookie and if it's not existing create one
    try:
        cart = json.loads(request.COOKIES['cart'])
    except:
        cart = {}

    # Defining local variables
    items = []
    cartQuantity = 0
    cartTotal = 0

    # Redefine variables based on cookie data
    for i in cart:
        try:
            cartQuantity += cart[i]['quantity']

            product = Product.objects.get(id=i)
            total = (product.price * cart[i]['quantity'])

            cartTotal += total
            cartQuantity += cart[i]['quantity']

            item = {
                'product': {
                    'id': product.id,
                    'name': product.name,
                    'description': product.description,
                    'price': product.price,
                    'category': product.category,
                    'imageURL': product.imageURL
                },
                'quantity': cart[i]['quantity'],
                'get_total': total,
            }
            items.append(item)
        except:
            pass

    return {'items': items, 'cartQuantity': cartQuantity, 'cartTotal': cartTotal}


def guestOrder(request, data):
    name = data['form']['name']
    phone = data['form']['phone']

    cookieData = cookieCart(request)
    items = cookieData['items']
    customer, created = Customer.objects.get_or_create(
        phone=phone
    )
    customer.name = name
    customer.save()

    order = Order.objects.create(
        customer=customer,
        complete=False
    )

    for item in items:
        product = Product.objects.get(id=item['product']['id'])

        orderItem = OrderItem.objects.create(
            product=product,
            order=order,
            quantity=item['quantity']
        )

    return customer, order
# Methods


def get_cart_items(request, order):
    items = order.orderitem_set.all()
    serializer = CartSerializer(items, many=True)

    return serializer.data


def get_cart_total(request, order):
    orderitems = order.orderitem_set.all()
    total = sum([item.get_total for item in orderitems])
    return total


def get_cart_quantity(request, order):
    orderitems = order.orderitem_set.all()
    total = sum([item.quantity for item in orderitems])
    return total

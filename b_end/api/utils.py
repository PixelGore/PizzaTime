import json
from .models import *
from .serializers import CartSerializer


def requestCart(data):
    cart = data['items']

    # Defining local variables
    items = []
    cartQuantity = 0
    cartTotal = 0

    # Redefine variables based on request data
    for i in cart:
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

    return {'items': items, 'cartQuantity': cartQuantity, 'cartTotal': cartTotal}


# Make Orders
def PostOrder(data, order):
    requestData = requestCart(data)
    items = requestData['items']

    for item in items:
        product = Product.objects.get(id=item['product']['id'])

        orderItem = OrderItem.objects.create(
            product=product,
            order=order,
            quantity=item['quantity']
        )


def loggedOrder(data, customer):
    order, created = Order.objects.get_or_create(
        customer=customer, complete=False)

    PostOrder(data, order)

    return order


def guestOrder(data):
    name = data['form']['name']
    phone = data['form']['phone']

    customer, created = Customer.objects.get_or_create(
        phone_number=phone
    )
    customer.name = name
    customer.save()

    order = Order.objects.create(
        customer=customer,
        complete=False
    )

    PostOrder(data, order)

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

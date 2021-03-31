from rest_framework.views import APIView
from rest_framework.response import Response
import json
from datetime import datetime
# Create your views here.
from .models import *
from .serializers import ProductSerializer, CartSerializer, UserSerializer

from .utils import CartData, guestOrder, get_cart_total


class ProductListView(APIView):

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)

        return Response(serializer.data)


class CartView(APIView):

    def get(self, request):
        data = CartData(request)
        items = data['items']
        cartQuantity = data['cartQuantity']
        cartTotal = data['cartTotal']

        context = [
            {'items': items},
            {'cartQuantity': cartQuantity},
            {'cartTotal': cartTotal}
        ]
        return Response(context)

    def put(self,request):
        data = json.loads(request.body)
        productId =  data['productId']
        action = data['action']

        customer = request.user.customer
        product = Product.objects.get(id=productId)
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        orderItem, created = OrderItem.objects.get_or_create(order=order, product=product)

        if action == 'add':
            orderItem.quantity = (orderItem.quantity +1)
        elif action == 'remove':
            orderItem.quantity = (orderItem.quantity -1)
        orderItem.save()

        if orderItem.quantity <=0:
            orderItem.delete()
        
        return Response('Item was updated')

    def post(self, request):
        transaction_id = datetime.now().timestamp()
        data = json.loads(request.body)

        if request.user.is_authenticated:
            customer = request.user.customer
            order, created = Order.objects.get_or_create(customer=customer, complete=False)
        else:
            customer, order = guestOrder(request, data)

        total = float(data['form']['total'])
        order.transaction_id = transaction_id

        if total == get_cart_total(request, order):
            order.complete = True
        order.save()

        ShippingAddress.objects.create(
            customer=customer,
            order=order,
            address=data['shipping']['address']
        )

        return Response('Payment complete!')

class UserView(APIView):
    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)

        return Response(serializer.data)
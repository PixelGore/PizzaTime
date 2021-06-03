from rest_framework.views import APIView
from rest_framework.response import Response
import json
from datetime import datetime

# Create your views here.
from .models import *
from .serializers import ProductSerializer, RegistrationSerializer

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

    def post(self, request):
        transaction_id = datetime.now().timestamp()
        data = json.loads(request.body)

        if request.user.is_authenticated:
            customer = request.user.customer
            order, created = Order.objects.get_or_create(
                customer=customer, complete=False)
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


class AuthView(APIView):
    def get(self, request):

        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        return Response(content)

    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = "successfully registered a new user"
            data['username'] = user.username
            token = Token.objects.get(user=user).key
            data['token'] = token
            return Response(data, status=201)
        else:
            data = serializer.errors
            return Response(data, status=409)
        

from rest_framework.views import APIView
from rest_framework.response import Response
import json
from datetime import datetime
from collections import defaultdict
from django.core.serializers import serialize

# Create your views here.
from .models import *
from .serializers import RegistrationSerializer, ProductSerializer, MenuSerializer
from .utils import loggedOrder, guestOrder, get_cart_total


class ProductListView(APIView):

    def get(self, request):
        menu = defaultdict(list)
        for product in Product.objects.all():
            menu[product.category].append(product)
        serializer = MenuSerializer(menu, many=True)
        return Response(serializer.data)

class CartView(APIView):

    def post(self, request):
        transaction_id = datetime.now().timestamp()
        data = json.loads(request.body)

        if request.user.is_authenticated:
            customer = request.user.customer
            order = loggedOrder(data, customer)

        else:
            customer, order = guestOrder(data)

        total = float(data['total'])
        order.transaction_id = transaction_id

        if total == get_cart_total(request, order):
            order.complete = True
        order.save()

        ShippingAddress.objects.create(
            customer=customer,
            order=order,
            address=data['address']
        )

        return Response('Payment complete!')


class AuthView(APIView):
    def get(self, request):

        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            # Phone number based on authenticated user
            'phone': str(Customer.objects.get(name=request.user.username).phone_number),
            'auth': str(request.auth),  # Auth token
        }
        return Response(content)

    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        data = {}

        if serializer.is_valid():
            user = serializer.save()
            token = Token.objects.get(user=user).key
            phone = request.data['phoneNumber']
            data['response'] = "successfully registered a new user"
            data['username'] = user.username
            data['phoneNumber'] = phone
            data['token'] = token
            customer, created = Customer.objects.get_or_create(
                phone_number=phone
            )
            customer.user = user
            customer.name = user.username
            customer.save()
            return Response(data, status=201)
        else:
            data = serializer.errors
            return Response(data, status=409)

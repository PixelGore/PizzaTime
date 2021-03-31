from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category', read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'description',
                  'price', 'category_name', 'image')


class CartSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product', read_only=True)
    price = serializers.CharField(source='get_total')

    class Meta:
        model = OrderItem
        fields = ('product_name', 'quantity', 'price')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')
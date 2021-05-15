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



class RegistrationSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'password2')
        extra_kwargs = {
            'password': {'write_only': True}
        }
    
    def save(self):
        user = User(
            username=self._validated_data['username']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match.'})
        
        user.set_password(password)
        user.save()
        return user

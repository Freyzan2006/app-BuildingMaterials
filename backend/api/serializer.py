from rest_framework import serializers
from api.models import Product, ProductCategory, Services, Clients

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'pk',
            'name', 
            'anons',
            'photo',
            'about',
            'city',
            'size',
            'isHave',
            'created_at',
            'updated_at',

            'category',
        ]


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = [
            'title'
        ]


class ServicesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Services
        fields = [
            'id',
            'name',
            'anons',
            'about',
            'photo'
        ]


class ClientsSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Clients
        fields = [
            'name',
            'number_client',
            'comment',
        ]


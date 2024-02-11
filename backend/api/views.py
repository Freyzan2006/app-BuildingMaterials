from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status
from django.shortcuts import redirect

from api.config import API_FRONTEND, api_info
from api.models import Product, ProductCategory, Services
from api.serializer import ClientsSerializer


class PathView(APIView):
    def get(self, request):
        output = [
            {
                "path": output.path,
                "about": output.about,
                "method": output.method 
            } for output in api_info
        ] 

        return Response(output, status = status.HTTP_200_OК) 


class ProductsView(APIView):
    def get(self, request):
       
        output = [
            {   
                'id': output.pk,
                "name": output.name,
                'photo': output.get_photo(),
                'anons': output.anons,
                'size': output.size,
                'city': output.city,
                'about': output.about,
                'isHave': output.isHave,
                'created_at': output.created_at,
                'updated_at': output.updated_at,

                'category': str(output.category)
            } for output in Product.objects.all()
        ]

        return Response(output, status = status.HTTP_200_OK)


class ServicesView(APIView):
    def get(self, request):
        output = [
            {   
                'id': output.pk,
                "name": output.name,
                'anons': output.anons,
                'about': output.about,
                'photo': output.get_photo()
            } for output in Services.objects.all()
        ]

        return Response(output, status=status.HTTP_200_OK)


class ClientsView(APIView):
    def post(self, request):
        serializer = ClientsSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return redirect(API_FRONTEND)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



    

































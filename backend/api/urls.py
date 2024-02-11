from django.urls import path

from api.views import *
from django.urls import re_path as url 

urlpatterns = [
    path('api', PathView.as_view(), name = 'api'),
    path('api/products', ProductsView.as_view(), name = "ProductsView"),
    path('api/services', ServicesView.as_view(), name = "ServicesView"),
    path('api/clients', ClientsView.as_view(), name = "ClientsView")
]

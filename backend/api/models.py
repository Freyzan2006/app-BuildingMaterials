from django.db import models
from django.db.models.signals import pre_delete
from django.dispatch.dispatcher import receiver

from api.config import API_BACKEND

class ProductCategory(models.Model):
    title = models.CharField(max_length=255, unique=True)
   
    def __str__(self):
        return str(self.title)

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Product(models.Model):
    name = models.CharField(max_length = 255)
    anons = models.CharField(max_length = 255)
    photo = models.ImageField(blank=True, null=True, upload_to='images/Products/')
    about = models.TextField(blank = True)
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE, blank=False)
    city = models.CharField(max_length = 255)
    size = models.IntegerField(blank = True)

    isHave = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

    def __str__(self):
        return self.name 

    
    def get_photo(self):
        try:
            return API_BACKEND + self.photo.url
        except:
            return "https://media.istockphoto.com/id/887464786/vector/no-cameras-allowed-sign-flat-icon-in-red-crossed-out-circle-vector.jpg?s=612x612&w=0&k=20&c=LVkPMBiZas8zxBPmhEApCv3UiYjcbYZJsO-CVQjAJeU="


class Services(models.Model):
    name = models.CharField(max_length = 255) 
    anons = models.CharField(max_length = 255)
    about = models.TextField()
    photo = models.ImageField(blank=True, null=True, upload_to='images/Services/')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'

    def __str__(self):
        return self.name 


    def get_photo(self):
        try:
            return API_BACKEND + self.photo.url
        except:
            return "https://media.istockphoto.com/id/887464786/vector/no-cameras-allowed-sign-flat-icon-in-red-crossed-out-circle-vector.jpg?s=612x612&w=0&k=20&c=LVkPMBiZas8zxBPmhEApCv3UiYjcbYZJsO-CVQjAJeU="


class Clients(models.Model):
    name = models.CharField(max_length = 255, blank = True, default = "Anonym")
    number_client = models.CharField(max_length = 15)
    comment = models.TextField(blank = True, default = "...")


    class Meta:
        verbose_name = 'Клиент'
        verbose_name_plural = 'Клиенты'

    def __str__(self):
        return self.number_client 


# Удаление фото
@receiver(pre_delete, sender=Product)
def image_model_delete(sender, instance, **kwargs):
    if instance.photo.name:
        instance.photo.delete(False)
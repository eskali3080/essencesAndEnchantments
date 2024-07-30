from django.contrib import admin
from .models import Product  # Asegúrate de que el nombre coincida con el definido en models.py

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'precio', 'categoria')
    list_filter = ('categoria',)

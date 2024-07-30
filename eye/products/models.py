from django.db import models
from django.utils.html import format_html

class Product(models.Model):  
    CATEGORIES = [
        ('colonias', 'Colonias'),
        ('cremas', 'Cremas'),
        ('otros', 'Otros'),
    ]

    nombre = models.CharField(max_length=255)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    imagen = models.ImageField(upload_to='productos/')
    categoria = models.CharField(max_length=10, choices=CATEGORIES)
    stock = models.PositiveIntegerField(default=0) 

    def __str__(self):
        return self.nombre
    
    def formatted_precio(self):
        # Formatea el precio eliminando decimales y agregando separador de miles
        return "{:,.0f}".format(self.precio)
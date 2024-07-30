from django.db import models

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

    def __str__(self):
        return self.nombre

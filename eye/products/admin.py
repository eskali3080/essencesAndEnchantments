from django.contrib import admin
from .models import Product
from django.utils.html import format_html

class ProductAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'formatted_precio', 'categoria', 'stock')
    list_filter = ('categoria',)
    
    def formatted_precio(self, obj):
        # Formatea el precio usando la función que definiste en el modelo
        return format_html(
            '<span>{}</span>',
            obj.formatted_precio()  # Llama al método del modelo que formatea el precio
        )
    formatted_precio.short_description = 'Precio'

admin.site.register(Product, ProductAdmin)

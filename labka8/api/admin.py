from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Product, Category

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'count', 'is_active', 'category', 'likes', 'rating')

admin.site.register(Category)
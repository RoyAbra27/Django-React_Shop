from django.contrib import admin
from .models import Product,Order,OrderDetail,Profile,Category
# Register your models here.
# admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderDetail)
admin.site.register(Profile)
admin.site.register(Category)

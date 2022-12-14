from rest_framework import serializers
from django.contrib.auth.models import User
from ..models import OrderDetail


class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta: 
        model = OrderDetail
        fields= '__all__'



from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse, JsonResponse
from ..models import Profile, Category, Order, Product, OrderDetail
from rest_framework.response import Response
from ..serializers import categorySerializer, productSerializer, orderSerializer


''' Done '''
# add product


@api_view(['POST'])
@permission_classes([IsAuthenticated])
# only for admin
def add_product(request):
    Product.objects.create(
        description=request.data['description'],
        photo=request.data['photo'],
        price=str(request.data['price']),
        user=request.user,
        category=Category.objects.get(name=request.data['category'])
    )
    return HttpResponse('regiser')


''' Done '''
# dispaly products


@api_view(['GET'])
def get_products(request, id=0, category_id=0):
    if int(category_id) > 0:

        if int(id) > 0:
            category = Category.objects.get(_id=category_id)
            product = Product.objects.filter(_id=id, category=category)
        else:
            category = Category.objects.get(_id=category_id)
            product = Product.objects.filter(category=category)
    else:
        product = Product.objects.all()
    serializer = productSerializer.ProductSerializer(product, many=True)
    return Response(serializer.data)


# update product


@api_view(['PUT'])
def update_prod(request, id):
    tempProd = Product.objects.get(_id=id)
    tempProd.description = request.data['description'],
    tempProd.photo = request.data['photo'],
    tempProd.price = str(request.data['price']),
    tempProd.user = request.user,
    tempProd.category = Category.objects.get(name=request.data['category'])
    tempProd.save()
    return Response('Product updated')

# delete product


@api_view(["DELETE"])
def delete_prod(request, id):
    tempProd = Product.objects.get(_id=id)
    tempProd.delete()
    return Response('Product deleted')

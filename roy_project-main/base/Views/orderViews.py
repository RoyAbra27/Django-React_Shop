#checkout
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse, JsonResponse
from ..models import Profile,Category,Order,Product,OrderDetail
from rest_framework.response import Response
from ..serializers import categorySerializer,productSerializer,orderSerializer,orderDetailSerializer

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addToOrders(request):
    order= request.data
    user = request.user
    print(user)
    order_total=0
    for x in order:
        print(x)
        prod_total= x["total_price"]
        order_total= order_total + int(prod_total)
    new_order_id= Order.objects.create(user_id=user.id, total_price=order_total)
    print(order)
    for x in order:
        print(x)
        prod_id=Product.objects.get(_id=x['_id'])
        prod_amount= x["amount"]
        prod_total= x["total_price"]
        OrderDetail.objects.create(order_id=new_order_id,prod_id=prod_id._id,amount= prod_amount, total_price=prod_total)

    return Response('order')



''' in progress '''
#checkout get

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def allOrders(request):
    user=request.user
    myOrders=user.order_set.all()
    serializer=orderSerializer.OrderSerializer(myOrders, many=True)
    return Response(serializer.data)

#order details get 
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderDetails(request,id=0):
    order_id=Order.objects.get(_id=id)
    orderDetails=OrderDetail.objects.filter(order_id=order_id)
    serializer=orderDetailSerializer.OrderDetailSerializer(orderDetails,many=True)
    return Response(serializer.data)


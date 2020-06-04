from rest_framework import viewsets
from rest_framework.permissions import BasePermission
from rest_framework.decorators import permission_classes
from .serializers import ProductSerializer
from products.models import Product


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


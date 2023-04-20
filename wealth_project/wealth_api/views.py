from django.shortcuts import render
from rest_framework import generics
from .serializers import WealthSerializer
from .models import Wealth


# Create your views here.
class WealthList(generics.ListCreateAPIView):
    queryset = Wealth.objects.all().order_by("id")
    serializer_class = WealthSerializer


class WealthDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Wealth.objects.all().order_by("id")
    serializer_class = WealthSerializer

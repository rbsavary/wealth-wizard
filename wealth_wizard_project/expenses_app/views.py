from django.shortcuts import render
from rest_framework import generics
from .serializers import ExpenseSerializer
from .models import Expense


# Create your views here.
class ExpenseList(generics.ListCreateAPIView):
    queryset = Expense.objects.all().order_by("-date")
    serializer_class = ExpenseSerializer


class ExpenseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Expense.objects.all().order_by("-date")
    serializer_class = ExpenseSerializer

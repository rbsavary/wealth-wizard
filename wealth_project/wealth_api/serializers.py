from rest_framework import serializers
from .models import Expenses, Income


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenses
        fields = ("id", "transaction", "amount", "date")


# class IncomeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Income
#         fields = ("id", "transaction", "amount", "date")

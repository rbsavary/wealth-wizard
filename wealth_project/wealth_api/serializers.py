from rest_framework import serializers
from .models import Wealth


class WealthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wealth
        fields = ("id", "income", "expenses", "debt")

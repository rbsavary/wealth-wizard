from django.db import models
from datetime import datetime


# Create your models here.
class Expense(models.Model):
    transaction = models.CharField(max_length=32)
    datetime = models.DateTimeField(default=datetime.now, blank=True)
    amount = models.FloatField()

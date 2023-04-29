from django.db import models
from django.utils import timezone


# Create your models here.
class Expense(models.Model):
    date = models.DateTimeField(("Date"), default=timezone.now)
    transaction = models.CharField(max_length=32)
    amount = models.IntegerField()

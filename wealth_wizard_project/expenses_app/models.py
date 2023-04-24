from django.db import models
from datetime import datetime


# Create your models here.
class expense(models.Model):
    transaction = models.CharField(max_length=32)
    date = models.DateTimeField(default=datetime.now, blank=True)
    amount = models.FloatField()

from django.db import models


# Create your models here.
class expense(models.Model):
    name = models.CharField(max_length=32)
    amount = models.FloatField()
    category = models.CharField(max_length=32)

# Generated by Django 4.2 on 2023-04-24 18:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expenses_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='expense',
            old_name='category',
            new_name='transaction',
        ),
        migrations.RemoveField(
            model_name='expense',
            name='name',
        ),
        migrations.AddField(
            model_name='expense',
            name='datetime',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
    ]

# Generated by Django 3.0.6 on 2020-06-04 11:10

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0003_remove_product_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='date_joined',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2020, 6, 4, 11, 10, 59, 629127, tzinfo=utc), verbose_name='date joined'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='product',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]

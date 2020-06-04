from django.db import models
from django.db.models.signals import pre_save
from .scraper import CheckPrice
from accounts.models import User


class Product(models.Model):
    producturl = models.CharField(max_length=1000)
    dprice = models.IntegerField()
    title = models.CharField(max_length=200, blank=True, null=True)
    cprice = models.FloatField(blank=True, null=True)
    timestamp = models.DateTimeField(
        verbose_name='Time Added', auto_now_add=True)

    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.title


def get_title(sender, instance, **kwargs):
    instance.title, instance.cprice = CheckPrice(instance.producturl)


pre_save.connect(get_title, sender=Product)

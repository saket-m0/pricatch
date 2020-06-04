from django.contrib import admin
from django.urls import path, include
from allauth.account.views import confirm_email
from django.conf.urls import url

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/products/', include('products.api.urls')),
    path('api/accounts/', include('accounts.api.urls'))
]

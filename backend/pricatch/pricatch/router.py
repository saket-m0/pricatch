from accounts.api.views import UserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('user', UserViewSet, basename='users')

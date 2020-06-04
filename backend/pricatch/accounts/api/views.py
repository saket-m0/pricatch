from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import RegistrationSerializer, UserSerializer
from rest_framework.authtoken.models import Token


@api_view(['POST'])
def registration_view(request):

    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = 'User Successfully Registered'
            data['id'] = user.id
            data['email'] = user.email
            data['name'] = user.name
            token = Token.objects.get(user=user).key
            data['token'] = token

        else:
            data = serializer.errors

        return Response(data)


@api_view(['GET', ])
def user_view(request):

    try:
        user = request.user
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)

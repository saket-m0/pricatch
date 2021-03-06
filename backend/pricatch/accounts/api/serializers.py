from rest_framework import serializers
from accounts.models import User


class RegistrationSerializer (serializers.ModelSerializer):

    password2 = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['name', 'email', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self):
        user = User(
            email=self.validated_data['email'],
            name=self.validated_data['name'],
        )

        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError(
                {'password': 'Passwords do NOT match'})
        user.set_password(password)
        user.save()
        return user


class UserSerializer (serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

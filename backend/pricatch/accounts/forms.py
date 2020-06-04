# from django import forms
# from django.contrib.auth.models import Group
# from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# from django.contrib.auth.forms import ReadOnlyPasswordHashField

# from .models import User

# class LoginForm (forms.Form) :
#     email = forms.EmailField(label = 'Email Address')
#     password = forms.CharField(label = 'Password', widget = forms.PasswordInput)

# class RegisterForm(forms.ModelForm):
#     password = forms.CharField(widget=forms.PasswordInput)
#     password2 = forms.CharField(
#         label='Confirm password', widget=forms.PasswordInput)

#     class Meta:
#         model = User
#         fields = ('email',)

#     def clean_email(self):
#         email = self.cleaned_data.get('email')
#         qs = User.objects.filter(email=email)
#         if qs.exists():
#             raise forms.ValidationError("email is taken")
#         return email

#     def clean_password2(self):
#         # Check that the two password entries match
#         password1 = self.cleaned_data.get("password1")
#         password2 = self.cleaned_data.get("password2")
#         if password1 and password2 and password1 != password2:
#             raise forms.ValidationError("Passwords do not match")
#         return password2

#     def save(self, commit=True):
#         # Save the provided password in hashed format
#         user = super(UserAdminCreationForm, self).save(commit=False)
#         user.set_password(self.cleaned_data["password1"])
#         # user.active = False
#         if commit:
#             user.save()
#         return user


# class UserAdminCreationForm(forms.ModelForm):
#     """
#     A form for creating new users. Includes all the required
#     fields, plus a repeated password.
#     """
#     password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
#     password2 = forms.CharField(
#         label='Password confirmation', widget=forms.PasswordInput)

#     class Meta:
#         model = User
#         fields = ('email', 'name',)

#     def clean_password2(self):
#         # Check that the two password entries match
#         password1 = self.cleaned_data.get("password1")
#         password2 = self.cleaned_data.get("password2")
#         if password1 and password2 and password1 != password2:
#             raise forms.ValidationError("Passwords don't match")
#         return password2

#     def save(self, commit=True):
#         # Save the provided password in hashed format
#         user = super(UserAdminCreationForm, self).save(commit=False)
#         user.set_password(self.cleaned_data["password1"])
#         if commit:
#             user.save()
#         return user


# class UserAdminChangeForm(forms.ModelForm):
#     """A form for updating users. Includes all the fields on
#     the user, but replaces the password field with admin's
#     password hash display field.
#     """
#     password = ReadOnlyPasswordHashField()

#     class Meta:
#         model = User
#         fields = ('email', 'name', 'password', 'active', 'admin')

#     def clean_password(self):
#         # Regardless of what the user provides, return the initial value.
#         # This is done here, rather than on the field, because the
#         # field does not have access to the initial value
#         return self.initial["password"]

from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate

from accounts.models import User


class RegistrationForm(UserCreationForm):
    email = forms.EmailField(
        max_length=254, help_text='Required. Add a valid email address.')

    class Meta:
        model = User
        fields = ('name', 'email',  'password1', 'password2', )


class LoginForm(forms.ModelForm):

    password = forms.CharField(label='Password', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('email', 'password')

    def clean(self):
        if self.is_valid():
            email = self.cleaned_data['email']
            password = self.cleaned_data['password']
            if not authenticate(email=email, password=password):
                raise forms.ValidationError("Invalid login")


class AccountUpdateForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ('email', 'name', )

    def clean_email(self):
        email = self.cleaned_data['email']
        try:
            user = User.objects.exclude(pk=self.instance.pk).get(email=email)
        except User.DoesNotExist:
            return email
        raise forms.ValidationError('Email "%s" is already in use.' % user)

    def clean_name(self):
        name = self.cleaned_data['name']
        try:
            account = User.objects.exclude(
                pk=self.instance.pk).get(name=name)
        except User.DoesNotExist:
            return name
        raise forms.ValidationError('Name "%s" is already in use.' % name)

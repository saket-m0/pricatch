from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


# from .forms import UserAdminCreationForm, UserAdminChangeForm
from .models import User


# class UserAdmin(BaseUserAdmin):
#     # The forms to add and change user instances
#     form = UserAdminChangeForm
#     add_form = UserAdminCreationForm

#     # The fields to be used in displaying the User model.
#     # These override the definitions on the base UserAdmin
#     # that reference specific fields on auth.User.
#     list_display = ('name', 'email', 'admin')
#     list_filter = ('admin', 'staff', 'active')
#     fieldsets = (
#         (None, {'fields': ('name', 'email', 'password')}),
#         ('Personal info', {'fields': ()}),
#         ('Permissions', {'fields': ('admin', 'staff', 'active')}),
#     )
#     # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
#     # overrides get_fieldsets to use this attribute when creating a user.
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('name', 'email', 'password1', 'password2')}
#          ),
#     )
#     search_fields = ('name',)
#     ordering = ('name',)
#     filter_horizontal = ()


# admin.site.register(User, UserAdmin)

# admin.site.unregister(Group)

class UserAdmin(BaseUserAdmin):
    list_display = ('id', 'email', 'name', 'date_joined',
                    'last_login', 'is_admin', 'is_staff')
    search_fields = ('email', 'name',)
    readonly_fields = ('date_joined', 'last_login')

    ordering = ('name',)
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(User, UserAdmin)

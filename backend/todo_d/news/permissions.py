from rest_framework import permissions


class IsAdmin(permissions.BasePermission):
    def has_object_permission(self, request, view, news):
        return request.user and request.user.is_admin

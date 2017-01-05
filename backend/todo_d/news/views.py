from rest_framework import viewsets as me_viewsets
from rest_framework import permissions
from rest_framework.pagination import PageNumberPagination

from news.models import News
from news.permissions import IsAdmin
from news.serializers import NewsSerializer
# Create your views here.


class NewsPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class NewsViewSet(me_viewsets.ModelViewSet):
    serializer_class = NewsSerializer
    pagination_class = NewsPagination
    lookup_field = 'id'
    queryset = News.objects.all()

    # def get_queryset(self):
    #     return News.objects.all()

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.IsAuthenticated(),)
        return (IsAdmin(),)

from rest_framework_mongoengine import serializers

from news.models import News


class NewsSerializer(serializers.DocumentSerializer):
    class Meta:
        model = News

        fields = ('title', 'content', 'imageUrl', 'created_at', 'updated_at')
        read_only_fields = ('created_at', 'updated_at')

from __future__ import unicode_literals

from mongoengine import Document, fields

from datetime import datetime

from utils.decorators import update_modified
# Create your models here.


@update_modified.apply
class News(Document):
    title = fields.StringField(required=True, max_length=140)
    content = fields.StringField(required=True)
    imageUrl = fields.URLField()

    created_at = fields.DateTimeField(required=True, default=datetime.utcnow)
    modified_at = fields.DateTimeField(required=True)

    meta = {
        'ordering': ['-created_at']
    }

    def __unicode__(self):
        return '{0}'.format(self.title)

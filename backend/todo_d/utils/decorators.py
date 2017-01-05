from datetime import datetime

from mongoengine import signals

def _handler(event):
    """Signal decorator to allow use of callback functions as class decorators."""

    def decorator(fn):
        def apply(cls):
            event.connect(fn, sender=cls)
            return cls

        fn.apply = apply
        return fn

    return decorator

@_handler(signals.pre_save)
def update_modified(sender, document):
    document.modified_at = datetime.utcnow()
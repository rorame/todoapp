from rest_framework import routers
from .api import TodoViewSets


router = routers.DefaultRouter()
router.register('api/todo', TodoViewSets, 'todo')

urlpatterns = router.urls

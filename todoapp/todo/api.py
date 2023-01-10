from rest_framework import viewsets, permissions
from .models import Todo
from .serializers import TodoSerializer


class TodoViewSets(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TodoSerializer

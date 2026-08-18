from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from ..models import Task
from .serializers import TaskSerializer
from .permissions import TaskPermission

# Create your views here.

class TaskAPIView(viewsets.ModelViewSet):
  permission_classes = [IsAuthenticated,TaskPermission]
  serializer_class = TaskSerializer
  
  def get_queryset(self):
    return Task.objects.filter(created_by=self.request.user)
  
  def perform_create(self, serializer):
    serializer.save(created_by=self.request.user)

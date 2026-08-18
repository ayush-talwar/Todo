from django.urls import path, include
from .views import TaskAPIView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('task', TaskAPIView, basename='task')

urlpatterns = router.urls
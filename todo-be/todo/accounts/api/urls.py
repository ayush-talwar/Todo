from django.urls import path
from rest_framework.authtoken.views import ObtainAuthToken
from .views import RegisterAPIView, LogoutAPIView, UserDetailsAPIView, ListAllUsers

urlpatterns = [
  path('register/', RegisterAPIView.as_view()),
  path('login/', ObtainAuthToken.as_view()),
  path('logout/', LogoutAPIView.as_view()),
  path('user-details/', UserDetailsAPIView.as_view()),
  path('list-users/', ListAllUsers.as_view())
]
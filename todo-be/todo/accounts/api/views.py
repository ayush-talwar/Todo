from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, generics
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from ..models import User
# Create your views here.

class RegisterAPIView(APIView):
  def post(self, request):
    serializer = UserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    token, _ = Token.objects.get_or_create(user=user)
    return Response({"msg":"user created successfully", "data":token.key}, status=201)
  
  
class LogoutAPIView(APIView):
  permission_classes = [IsAuthenticated]
  
  def post(self, request):
    try:
      request.user.auth_token.delete()
      return Response({"msg":"User logged out successfully", "data":[]},status=200)
    except Exception as e:
      return Response({"msg":"Enable to log out user","data":[]},status=400)
      

class UserDetailsAPIView(APIView):
  permission_classes = [IsAuthenticated]
  
  def get(self, request):
    user = request.user
    return Response({'id':user.id,'email':user.email,'username':user.username})
  
class ListAllUsers(generics.ListAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password

USER = get_user_model()

class UserSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True, validators=[validate_password])
  password2 = serializers.CharField(write_only=True)
  
  class Meta:
    model = USER
    fields = ('id', 'username', 'email', 'phone_number', 'gender', 'age', 'password', 'password2')
    
  def validate(self, attrs):
    if attrs['password'] != attrs['password2']:
      raise serializers.ValidationError({"password": "Password fields didn't match."})
    username_exists = USER.objects.filter(username=attrs['username']).exists()
    if username_exists:
      raise serializers.ValidationError({"username": "Username already exists."})
    return attrs
  
  def create(self, validated_data):
    validated_data.pop('password2')
    return USER.objects.create_user(**validated_data)
from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
  GENDER_CHOICES = {
    'M': 'Male',
    'F': 'Female',
    'O': 'Other'
  }
  email = models.EmailField(unique=True, null=False, blank=False)
  phone_number = models.CharField(max_length=10, unique=True, null=False, blank=False)
  gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=False, blank=False)
  age = models.PositiveIntegerField(null=False, blank=False)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now=True)
  
  def __str__(self):
    return self.username
  
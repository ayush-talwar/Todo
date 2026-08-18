import uuid
from django.db import models
from accounts.models import User

# Create your models here.
class Task(models.Model):
  CATEGORY_CHOICES = {
    'W': 'Work',
    'P': 'Personal',
    'O': 'Other'
  }
  STATUS_CHOICES = {
    'P': 'Pending',
    'C': 'Completed',
    'I': 'In Progress',
    'D': 'Overdue'
  }
  PRIORITY_CHOICES = {
    'HI': 'Highest',
    'H': 'High',
    'M': 'Medium',
    'L': 'Low'
  }
  task_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
  name = models.CharField(max_length=300, unique=True, null=False, blank=False)
  category = models.CharField(max_length=1, choices=CATEGORY_CHOICES)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now=True)
  created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks')
  status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='I')
  due_date = models.DateTimeField(null=True, blank=True)
  priority = models.CharField(max_length=2, choices=PRIORITY_CHOICES, null=False, blank=False)
from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

# Create your models here.
class Score(models.Model):
    points = models.IntegerField(blank=True)
    level = models.IntegerField(blank=True)
    users = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    # def __str__(self):
    #     return self.points, self.level, self.users
    
from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class CustomUser(AbstractUser):
    pass
    points = models.IntegerField(blank=True)
    level = models.IntegerField(blank=True)

    def __str__(self):
        return self.username
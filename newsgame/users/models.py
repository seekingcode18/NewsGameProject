from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class CustomUser(AbstractUser):
    pass
    points = models.IntegerField(null=True)
    level = models.IntegerField(null=True)

    def __str__(self):
        return self.username
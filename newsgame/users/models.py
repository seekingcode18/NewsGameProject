from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class CustomUser(AbstractUser):
    pass
    points = models.IntegerField(default=0, verbose_name=0)
    level = models.IntegerField(default=0, verbose_name=0)

    def __str__(self):
        return self.username
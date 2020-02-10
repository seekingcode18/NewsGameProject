from django.urls import path
from users import views
from users.views import index

urlpatterns = [
    path('', views.index),
]
from django.urls import path
from users import views
from users.views import index

urlpatterns = [
    path('', views.index),
    path('signup/', views.SignUp.as_view(), name='signup'),
    path('world/', views.world, name='world'),
    path('level01/', views.level01, name='level01'),
    path('level02/', views.level02, name='level02'),
    path('level03/', views.level03, name='level03'),
    path('highscores/', views.highscores, name='highscores'),
]
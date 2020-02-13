from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from users.models import CustomUser
from rest_framework import viewsets, generics
from users.serializers import UserSerializer

from users.forms import CustomUserCreationForm, CustomUserChangeForm

# Create your views here.

def index(request):
    return render(request, 'home.html')

def world(request):
    return render(request, 'world.html')

def level01(request):
    return render(request, 'level01.html')

def level02(request):
    return render(request, 'level02.html')

def level03(request):
    return render(request, 'level03.html')

def highscores(request):
    # select 10 highest scores and send them with their username to the template
    queries = CustomUser.objects.all().order_by('-points').values('username', 'points')[:10]
    context = {
        "users": list(queries)
    }
    return render(request, 'highscores.html', context=context)

class SignUp(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'

# query the db for all users
class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all().order_by('-points')
    serializer_class = UserSerializer

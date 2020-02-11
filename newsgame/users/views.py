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

class SignUp(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'

def update(request):
    points = request.POST.get('points')
    user = CustomUser(id=1)
    user.points = points
    user.save()
    return render(request, 'home.html')

# query the db for all users
class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

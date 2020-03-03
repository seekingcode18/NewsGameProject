from django.test import TestCase, SimpleTestCase, Client
from django.urls import reverse, resolve
from rest_framework.test import APITestCase
from users.models import CustomUser
from users.forms import CustomUserCreationForm
from users.views import index, highscores, world, level01, level02, level03, SignUp

class CustomUserCreateTestCase(APITestCase):
  def test_create_user(self):
    initial_user_count = CustomUser.objects.count()
    user_attrs = {
      'username': 'Michael',
      'points': 0,
      'level': 1,
      'email': 'michael@email.com',
      'password': '1nsecure_passw0rd'
    }
    response = self.client.post('/user/', user_attrs)
    self.assertEqual(response.status_code, 201)
    self.assertEqual(CustomUser.objects.count(), initial_user_count + 1)

  def test_update_user(self):
    initial_user_count = CustomUser.objects.count()
    user_attrs = {
      'username': 'Michael',
      'points': 0,
      'level': 1,
      'email': 'michael@email.com',
      'password': '1nsecure_passw0rd'
    }
    response = self.client.post('/user/', user_attrs)
    user_attrs_updated = {
      'username': 'Michael',
      'points': 50,
      'level': 5,
      'email': 'michael@email.com',
      'password': 'B3TT3r_p@55w0rd'
    }
    response = self.client.put('/user/1/', user_attrs_updated)
    self.assertEqual(response.status_code, 200)

  def test_read_user(self):
    initial_user_count = CustomUser.objects.count()
    user_attrs = {
      'username': 'Michael',
      'points': 0,
      'level': 1,
      'email': 'michael@email.com',
      'password': '1nsecure_passw0rd'
    }
    self.client.post('/user/', user_attrs)
    get_user = self.client.get('/user/1/')
    self.assertEqual(get_user.status_code, 200)

  def test_delete_user(self):
    initial_user_count = CustomUser.objects.count()
    user_attrs = {
      'username': 'Michael',
      'points': 0,
      'level': 1,
      'email': 'michael@email.com',
      'password': '1nsecure_passw0rd'
    }
    self.client.post('/user/', user_attrs)
    get_user = self.client.get('/user/1/')
    self.assertEqual(get_user.status_code, 200)
    del_user = self.client.delete('/user/1/')
    self.assertEqual(del_user.status_code, 204)
    self.client.post('/user/', user_attrs)
    get_user_again = self.client.get('/user/1/')
    self.assertEqual(get_user_again.status_code, 404)
  
class TestUrls(SimpleTestCase):
  def test_world_url(self):
    url = reverse('world')
    self.assertEquals(resolve(url).func, world)

  def test_level1_url(self):
    url = reverse('level01')
    self.assertEquals(resolve(url).func, level01)
    
  def test_level2_url(self):
    url = reverse('level02')
    self.assertEquals(resolve(url).func, level02)
    
  def test_level3_url(self):
    url = reverse('level03')
    self.assertEquals(resolve(url).func, level03)
    
  def test_highscores_url(self):
    url = reverse('highscores')
    self.assertEquals(resolve(url).func, highscores)
    
  def test_signup_url(self):
    url = reverse('signup')
    self.assertEquals(resolve(url).func.view_class, SignUp)

class TestViews(TestCase):
  def test_index_view(self):
    client = Client()
    response = client.get(reverse('home'))
    self.assertEquals(response.status_code, 200)
    self.assertTemplateUsed(response, 'home.html')

  def test_signup_view(self):
    client = Client()
    response = client.get(reverse('signup'))
    self.assertEquals(response.status_code, 200)
    self.assertTemplateUsed(response, 'signup.html')

  def test_highscores_view(self):
    client = Client()
    response = client.get(reverse('highscores'))
    self.assertEquals(response.status_code, 200)
    self.assertTemplateUsed(response, 'highscores.html')

  def test_world_view(self):
    client = Client()
    response = client.get(reverse('world'))
    self.assertEquals(response.status_code, 200)
    self.assertTemplateUsed(response, 'world.html')

  def test_level1_view(self):
    client = Client()
    response = client.get(reverse('level01'))
    self.assertEquals(response.status_code, 200)
    self.assertTemplateUsed(response, 'level01.html')

  def test_level2_view(self):
    client = Client()
    response = client.get(reverse('level02'))
    self.assertEquals(response.status_code, 200)
    self.assertTemplateUsed(response, 'level02.html')

  def test_level3_view(self):
    client = Client()
    response = client.get(reverse('level03'))
    self.assertEquals(response.status_code, 200)
    self.assertTemplateUsed(response, 'level03.html')

class TestModels(TestCase):
  def test_custom_user(self):
    CustomUser.objects.create(
      username='John',
      points='1000',
      email='john@email.com',
      password='somePassword_!3mr56x',
      level='4'
    )
    self.assertEqual(CustomUser.objects.count(), 1)
    CustomUser.objects.create(
      username='Joan',
      points='2000',
      email='joan@email.com',
      password='@no_th3rPw_3jo39',
      level='2'
    )
    self.assertEqual(CustomUser.objects.count(), 2)

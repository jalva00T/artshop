from django.urls import path
from . import views

urlpatterns = [
    # path('', views.Userlist.as_view(), name='user_list'),
    path('signin/', views.UserSignIn.as_view(), name='user_sign_in'),
    path('signup/', views.UserSignup.as_view(), name='user_check_login'),
    path('check-login', views.UserCheckLogin.as_view(), name='user_check_login'),
]
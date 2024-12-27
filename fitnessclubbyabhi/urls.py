"""
URL configuration for fitnessclubbyabhi project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings



if settings.DEBUG:
    # Your debugging-related code


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.intro, name='intro'),
    path('index/', views.index, name='index'),
    path('aboutus/', views.aboutus, name='aboutus'),
    path('achieverplan/', views.achieverplan, name='achieverplan'),
    path('blog/', views.blog, name='blog'),
    path('cardio/', views.cardio, name='cardio'),
    path('challengesection/', views.challengesection, name='challengesection'),
    path('contact/', views.contact, name='contact'),
    path('eatingchallenge/', views.eatingchallenge, name='eatingchallenge'),
    path('eliteplan/', views.eliteplan, name='eliteplan'),
    path('enterotp/', views.enterotp, name='enterotp'),
    path('forgetpassword/', views.forgetpassword, name='forgetpassword'),
    path('login/', views.login, name='login'),
    path('memberships/', views.memberships, name='memberships'),
    path('ourplan/', views.ourplan, name='ourplan'),
    path('ourtrainer/', views.ourtrainer, name='ourtrainer'),
    path('plan/', views.plan, name='plan'),
    path('services/', views.services, name='services'),
    path('shop/', views.shop, name='shop'),
    path('signup/', views.signup, name='signup'),
    path('starterplan/', views.starterplan, name='starterplan'),
    path('successcontact/', views.successcontact, name='successcontact'),
    path('transformerplan/', views.transformerplan, name='transformerplan'),
    path('30days/', views.threedays, name='30days'),
    path('user-dashboard/', views.user_dashboard, name='user_dashboard'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

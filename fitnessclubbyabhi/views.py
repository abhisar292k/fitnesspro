from django.shortcuts import render

def intro(request):
    return render(request, 'landingpage.html')

def index(request):
    return render(request, 'index.html')

def aboutus(request):
    return render(request, 'aboutus.html')

def achieverplan(request):
    return render(request, 'achieverplan.html')

def blog(request):
    return render(request, 'blog.html')

def cardio(request):
    return render(request, 'cardio.html')

def challengesection(request):
    return render(request, 'challengesection.html')

def contact(request):
    return render(request, 'contact.html')

def eatingchallenge(request):
    return render(request, 'eatingchallenge.html')

def eliteplan(request):
    return render(request, 'eliteplan.html')

def enterotp(request):
    return render(request, 'enterotp.html')

def forgetpassword(request):
    return render(request, 'forgetpassword.html')

def login(request):
    return render(request, 'login.html')

def memberships(request):
    return render(request, 'memberships.html')

def ourplan(request):
    return render(request, 'ourplan.html')

def ourtrainer(request):
    return render(request, 'ourtrainer.html')

def plan(request):
    return render(request, 'plan.html')

def services(request):
    return render(request, 'services.html')

def shop(request):
    return render(request, 'shop.html')

def signup(request):
    return render(request, 'signup.html')

def starterplan(request):
    return render(request, 'starterplan.html')

def successcontact(request):
    return render(request, 'successcontact.html')

def transformerplan(request):
    return render(request, 'transformerplan.html')

def threedays(request):
    return render(request, '30days.html')
def user_dashboard(request):
    return render(request, 'userdashboard.html')
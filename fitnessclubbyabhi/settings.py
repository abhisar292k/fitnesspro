from pathlib import Path
import os
import dj_database_url
import pymysql
from dotenv import load_dotenv

# Load environment variables from a .env file if in development
load_dotenv()

# Initialize MySQL support
pymysql.install_as_MySQLdb()

# Build paths inside the project
BASE_DIR = Path(__file__).resolve().parent.parent

# SECRET_KEY from environment
SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', 'your-default-secret-key')  # Replace with your actual key for local testing

# Debug mode
DEBUG = os.getenv('DJANGO_DEBUG', 'False') == 'True'

# Allowed hosts (Vercel expects a comma-separated string)
ALLOWED_HOSTS = os.getenv('DJANGO_ALLOWED_HOSTS', '*').split(',')

# Installed apps
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Add other apps here
]

# Middleware
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # Ensure static files are served
]

ROOT_URLCONF = 'fitnessclubbyabhi.urls'

# Templates
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'fitnessclubbyabhi.wsgi.application'

# Database Configuration using dj_database_url
DATABASES = {
    'default': dj_database_url.config(
        default=os.getenv('DATABASE_URL', 'sqlite:///' + os.path.join(BASE_DIR, 'db.sqlite3'))
    )
}

# Password validators
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Static files (served by Vercel and WhiteNoise)
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]

# WhiteNoise for serving static files
WHITENOISE_AUTOREFRESH = True  # Ensures static files are refreshed during development

# Default auto field
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Add any other configuration as needed...

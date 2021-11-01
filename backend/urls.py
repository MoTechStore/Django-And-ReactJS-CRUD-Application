from django.conf.urls import url
from django.urls.resolvers import URLPattern
from backend import views

from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [

    path('', views.motech, name='home'),
    path('student/', views.StudentAPI),
    path('student/<int:pk>', views.StudentAPI),



]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

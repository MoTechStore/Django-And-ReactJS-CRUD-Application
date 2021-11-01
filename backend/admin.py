from django.contrib import admin
from .models import Students


models_list = [Students] 
admin.site.register(models_list)
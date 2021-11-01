from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from backend.models import Students
from backend.serializers import StudentSerializer




@csrf_exempt
def StudentAPI(request, pk=0):
	if request.method == 'GET':
		students = Students.objects.all()
		students_serializer = StudentSerializer(students, many=True)
		return JsonResponse(students_serializer.data, safe=False)
	elif request.method == 'POST':
		student_data = JSONParser().parse(request)
		students_serializer = StudentSerializer(data=student_data)
		if students_serializer.is_valid():
			students_serializer.save()
			return JsonResponse("Added Successfully", safe=False)
		return JsonResponse("Failed To Add", safe=False)
	elif request.method == 'PUT':
		student_data = JSONParser().parse(request)
		print("student data")
		print(student_data)
		print("Student ID")
		student = Students.objects.get(studentId=student_data['studentId'])
		print(student)
		students_serialzer = StudentSerializer(student, data=student_data)
		if students_serializer.is_valid():
			students_serializer.save()
			return JsonResponse("Updated Successfully", safe=False)
		return JsonResponse("Failed To Update")	
	elif request.method == 'DELETE':
		student = Students.objects.get(studentId=pk)
		student.delete()
		return JsonResponse("Student Was Deleted Successfully", safe=False)		










def motech(request):
	return render(request, 'backend/home.html')

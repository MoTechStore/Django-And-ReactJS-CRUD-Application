from rest_framework import fields, serializers
from backend.models import Students


class StudentSerializer(serializers.ModelSerializer):
	class Meta:
		model = Students
		fields = ('studentId',
			      'Firstname',
			       'Lastname',
			       'Email',
			       'Course')






from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
def names(request):
    return JsonResponse({'names': ['William', 'Rod', 'Grant']})
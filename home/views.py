from django.shortcuts import render


def index(request):
    """A view to return the index paage """

    return render(request, 'home/index.html')


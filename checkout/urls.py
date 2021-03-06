from django.urls import path
from . import views

# urls required to view checkout and use checkout_success
urlpatterns = [
    path('', views.checkout, name='checkout'),
    path('checkout_success/<order_number>', views.checkout_success, name='checkout_success'),
]

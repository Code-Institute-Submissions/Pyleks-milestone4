from django.urls import path
from . import views

# Required for accessing order history with correct order number.
urlpatterns = [
    path('', views.profile, name='profile'),
    path('order_history/<order_number>', views.order_history, name='order_history'),
]

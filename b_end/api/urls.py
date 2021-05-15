from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views


urlpatterns = [
    path('product-list/', views.ProductListView.as_view()),
    path('cart/', views.CartView.as_view()),
    path('auth/', views.AuthView.as_view()),
    path('login/', obtain_auth_token),
]
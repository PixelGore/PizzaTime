from django.urls import path
from . import views

urlpatterns = [
    path('product-list/', views.ProductListView.as_view()),
    path('cart/', views.CartView.as_view()),
    path('getUser/', views.UserView.as_view())
]
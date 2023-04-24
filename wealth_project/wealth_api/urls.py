from django.urls import path
from . import views

urlpatterns = [
    path(
        "api/expenses", views.ExpenseList.as_view(), name="expense_list"
    ),  # api/expenses will be routed to the ExpenseList view for handling
    path(
        "api/expenses/<int:pk>", views.ExpenseDetail.as_view(), name="expense_detail"
    ),  # api/expenses will be routed to the ExpenseDetail view for handling
]

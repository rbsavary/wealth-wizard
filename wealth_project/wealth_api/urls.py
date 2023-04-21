from django.urls import path
from . import views

urlpatterns = [
    path(
        "api/wealth", views.ContactList.as_view(), name="wealth_list"
    ),  # api/contacts will be routed to the ContactList view for handling
    path(
        "api/contacts/<int:pk>", views.ContactDetail.as_view(), name="contact_detail"
    ),  # api/contacts will be routed to the ContactDetail view for handling
]

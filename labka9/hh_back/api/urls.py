from django.urls import path
from .views import (
    CompanyListView, CompanyDetailView, CompanyVacancyListView,
    VacancyListView, VacancyDetailView, TopTenVacanciesView
)

urlpatterns = [
    path('companies/', CompanyListView.as_view()),
    path('companies/<int:pk>/', CompanyDetailView.as_view()),
    path('companies/<int:pk>/vacancies/', CompanyVacancyListView.as_view()),
    path('vacancies/', VacancyListView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view()),
    path('vacancies/top_ten/', TopTenVacanciesView.as_view()),
]

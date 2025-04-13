import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Vacancy } from '../../models/vacancy';

@Component({
  standalone: true,
  selector: 'app-vacancy-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent {
  vacancies: Vacancy[] = [];

  constructor(private route: ActivatedRoute, private service: CompanyService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getCompanyVacancies(id).subscribe(data => {
      this.vacancies = data;
    });
  }
}
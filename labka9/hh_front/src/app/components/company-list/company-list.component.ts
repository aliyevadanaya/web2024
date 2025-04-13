import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';

@Component({
  standalone: true,
  selector: 'app-company-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private service: CompanyService, private router: Router) {}

  ngOnInit(): void {
    this.service.getCompanies().subscribe(data => {
      this.companies = data;
      console.log('companies:', this.companies); // ← добавь ЭТО
    });
  }
  

  goToVacancies(companyId: number) {
    this.router.navigate(['/company', companyId, 'vacancies']);
  }

}

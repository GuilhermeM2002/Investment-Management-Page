import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { TableComponent } from '../table/table.component';
import { GetInvestmentResponse } from '../../types/GetInvestmentResponse';
import { InvestmentService } from '../../services/investment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-investment',
  imports: [CommonModule, CardComponent, TableComponent],
  templateUrl: './last-investment.component.html',
  styleUrl: './last-investment.component.scss',
})
export class LastInvestmentComponent {
  investmentList: GetInvestmentResponse[] = [];
  constructor(private investmentService: InvestmentService) {}

  ngOnInit(): void {
    this.loadInvestments();
  }

  loadInvestments() {
    this.investmentService.getInvestmentsByUserId(12345).subscribe({
      next: (investments) => {
        console.log('Investments loaded', investments);
        this.investmentList = investments;
      },
      error: (error) => {
        console.error('Error loading investments', error);
      },
    });
  }
}

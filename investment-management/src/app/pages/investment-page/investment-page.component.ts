import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AppLayoutComponent } from '../../components/app-layout/app-layout.component';
import { InvestmentService } from '../../services/investment.service';
import { GetInvestmentResponse } from '../../types/GetInvestmentResponse';
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-investment-page',
  imports: [CardComponent, CommonModule, AppLayoutComponent, TableComponent],
  templateUrl: './investment-page.component.html',
  styleUrl: './investment-page.component.scss',
  providers: [CurrencyPipe],
})
export class InvestmentPageComponent {
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

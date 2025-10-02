import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppLayoutComponent } from '../../components/app-layout/app-layout.component';
import { CardComponent } from '../../components/card/card.component';
import { PortfolioSumaryComponent } from '../../components/portfolio-sumary/portfolio-sumary.component';
import { AddInvestmentButtonComponent } from '../../components/add-investment-button/add-investment-button.component';
import { LastInvestmentComponent } from '../../components/last-investment/last-investment.component';
import { InvestmentService } from '../../services/investment.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    AppLayoutComponent,
    CardComponent,
    PortfolioSumaryComponent,
    AddInvestmentButtonComponent,
    LastInvestmentComponent,
    AsyncPipe,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  constructor(
    private router: Router,
    private investmentService: InvestmentService
  ) {
    this.portfolioValue$ = this.investmentService.getPortfolioValue(12345);
  }

  portfolioValue$: Observable<number>;

  navigate() {
    this.router.navigate(['add-investment']);
  }
}

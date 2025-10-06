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
import { map } from 'rxjs/operators';
import { GetInvestmentResponse } from '../../types/GetInvestmentResponse';

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
  portfolioValue$: Observable<number>;
  variation$: Observable<number>;
  investmentsList: GetInvestmentResponse[] = [];

  constructor(
    private router: Router,
    private investmentService: InvestmentService
  ) {
    this.portfolioValue$ = this.investmentService.getPortfolioValue(12345);
    this.variation$ = this.investmentService.getInvestmentsByUserId(12345).pipe(
      map((data) => {
        const totalBuyPrice = data.reduce(
          (acc, inv) => acc + inv.buyPrice * inv.quantity,
          0
        );
        const totalCurrentPrice = data.reduce(
          (acc, inv) => acc + inv.currentPrice * inv.quantity,
          0
        );
        return ((totalCurrentPrice - totalBuyPrice) / totalBuyPrice) * 100;
      })
    );
  }

  navigate() {
    this.router.navigate(['add-investment']);
  }
}

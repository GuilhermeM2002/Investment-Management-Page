import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppLayoutComponent } from "../../components/app-layout/app-layout.component";
import { CardComponent } from '../../components/card/card.component';
import { PortfolioSumaryComponent } from '../../components/portfolio-sumary/portfolio-sumary.component';
import { AddInvestmentButtonComponent } from '../../components/add-investment-button/add-investment-button.component';
import { LastInvestmentComponent } from '../../components/last-investment/last-investment.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [AppLayoutComponent, CardComponent, PortfolioSumaryComponent, AddInvestmentButtonComponent, LastInvestmentComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  constructor(private router: Router) {}

  navigate(){
    this.router.navigate(['add-investment']);
  }
}

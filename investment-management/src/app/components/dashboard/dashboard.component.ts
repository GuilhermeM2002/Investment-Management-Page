import { Component } from '@angular/core';
import { PortfolioSumaryComponent } from "../portfolio-sumary/portfolio-sumary.component";
import { AddInvestmentButtonComponent } from "../add-investment-button/add-investment-button.component";
import { LastInvestmentComponent } from "../last-investment/last-investment.component";

@Component({
  selector: 'app-dashboard',
  imports: [PortfolioSumaryComponent, AddInvestmentButtonComponent, LastInvestmentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

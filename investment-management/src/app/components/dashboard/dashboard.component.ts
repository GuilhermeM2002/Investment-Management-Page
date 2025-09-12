import { Component } from '@angular/core';
import { PortfolioSumaryComponent } from "../portfolio-sumary/portfolio-sumary.component";
import { AddInvestmentButtonComponent } from "../add-investment-button/add-investment-button.component";
import { LastInvestmentComponent } from "../last-investment/last-investment.component";
import { CardComponent } from "../card/card.component";
import { Router } from '@angular/router';
import { ToolBarComponent } from "../tool-bar/tool-bar.component";

@Component({
  selector: 'app-dashboard',
  imports: [PortfolioSumaryComponent, AddInvestmentButtonComponent, LastInvestmentComponent, CardComponent, ToolBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    constructor(private router: Router) {}

  navigate(){
    this.router.navigate(['add-investment']);
  }
}

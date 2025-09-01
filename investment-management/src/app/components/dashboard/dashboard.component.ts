import { Component } from '@angular/core';
import { PortfolioSumaryComponent } from "../portfolio-sumary/portfolio-sumary.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-dashboard',
  imports: [PortfolioSumaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-last-investment',
  imports: [CardComponent, TableComponent],
  templateUrl: './last-investment.component.html',
  styleUrl: './last-investment.component.scss'
})
export class LastInvestmentComponent {
  investmentList = [
    { asset: 'PETR4', quantity: 100, price: 35.50, variation: 0.025, total: 3550 },
    { asset: 'VALE3', quantity: 50, price: 68.20, variation: -0.011, total: 3410 },
    { asset: 'ITUB4', quantity: 30, price: 28.75, variation: 0.015, total: 862.5 }
  ];
}

import { Component } from '@angular/core';
import { ToolBarComponent } from "../../components/tool-bar/tool-bar.component";
import { CardComponent } from "../../components/card/card.component";
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AppLayoutComponent } from "../../components/app-layout/app-layout.component";

@Component({
  selector: 'app-investment-page',
  imports: [CardComponent, CommonModule, AppLayoutComponent],
  templateUrl: './investment-page.component.html',
  styleUrl: './investment-page.component.scss',
  providers: [CurrencyPipe]
})
export class InvestmentPageComponent {
    investmentList = [ 
      {assetType: 'Stocks', ticker: 'ALL', quantity: 150, buyPrice: 100, currentPrice: 100, date: new Date('2023-01-15')}, 
      {assetType: 'Bonds', ticker: 'XYZ', quantity: 200, buyPrice: 50, currentPrice: 55, date: new Date('2023-02-20')},
      {assetType: 'Real Estate', ticker: 'REIT1', quantity: 10, buyPrice: 2000, currentPrice: 2100, date: new Date('2023-03-10')} ];
}

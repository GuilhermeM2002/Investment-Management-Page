import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private apiUrl = 'http://localhost:8080/investment';

  constructor(private httpClient: HttpClient) { }

  addInvestment(
    id: number,
    userId: number,
    assetType: string,
    ticker: string,
    quantity: number,
    buyPrice: number,
    currentPrice: number,
    date: string) {
    return this.httpClient.post(this.apiUrl,
      { id, userId, assetType, ticker, quantity, buyPrice, currentPrice, date })
  }

}

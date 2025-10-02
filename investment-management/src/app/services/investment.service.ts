import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetInvestmentResponse } from '../types/GetInvestmentResponse';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  private apiUrl = 'http://localhost:8080/investment';

  constructor(private httpClient: HttpClient) {}

  addInvestment(
    userId: number,
    assetType: string,
    ticker: string,
    quantity: number,
    buyPrice: number,
    currentPrice: number,
    date: string
  ) {
    return this.httpClient.post(this.apiUrl, {
      userId,
      assetType,
      ticker,
      quantity,
      buyPrice,
      currentPrice,
      date,
    });
  }

  getInvestmentsByUserId(userId: number) {
    return this.httpClient.get<GetInvestmentResponse[]>(
      `http://localhost:8080/investment`,
      { params: { id: userId } }
    );
  }

  getPortfolioValue(userId: number): Observable<number> {
    return this.httpClient.get<number>(
      `http://localhost:8080/investment/portfolio/${userId}`,
    );
  }
}

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
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from '../../components/upload-dialog/upload-dialog.component';

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
  investmentsList$: Observable<GetInvestmentResponse[]>;
  quantityOfInvestments$: Observable<number>;

  constructor(
    private router: Router,
    private investmentService: InvestmentService,
    private dialog: MatDialog
  ) {
    this.portfolioValue$ = this.investmentService.getPortfolioValue(12345);
    this.investmentsList$ =
      this.investmentService.getInvestmentsByUserId(12345);
    this.quantityOfInvestments$ = this.investmentsList$.pipe(
      map((data) => data.length)
    );
    this.variation$ = this.investmentsList$.pipe(
      map((data) => {
        const totalBuyPrice = data.reduce(
          (acc, inv) => acc + inv.buyPrice * inv.quantity,
          0
        );
        const totalCurrentPrice = data.reduce(
          (acc, inv) => acc + inv.currentPrice * inv.quantity,
          0
        );
        const variation =
          ((totalCurrentPrice - totalBuyPrice) / totalBuyPrice) * 100;
        return parseFloat(variation.toFixed(1));
      })
    );
  }

  openUploadDialog(): void {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '400px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Upload concluído com sucesso');
      }
    });
  }

  navigate() {
    this.router.navigate(['add-investment']);
  }
}

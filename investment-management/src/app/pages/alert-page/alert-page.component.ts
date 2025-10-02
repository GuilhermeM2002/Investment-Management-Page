import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppLayoutComponent } from "../../components/app-layout/app-layout.component";
import { AlertService } from '../../services/alert.service';
import { GetAlertsResponse } from '../../types/GetAlertsResponse';

@Component({
  selector: 'app-alert-page',
  imports: [AppLayoutComponent, DatePipe],
  templateUrl: './alert-page.component.html',
  styleUrl: './alert-page.component.scss',
  providers: [DatePipe]
})
export class AlertPageComponent {
  alertList: GetAlertsResponse[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.loadAlerts();
  }

  loadAlerts() {
    this.alertService.getAlertsByUserId(12345).subscribe({
      next: (alerts) => {
        console.log('Alerts loaded', alerts);
        this.alertList = alerts;
      },
      error: (error) => {
        console.error('Error loading alerts', error);
      },
    });
  }
}

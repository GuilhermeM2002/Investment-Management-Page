import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAlertsResponse } from '../types/GetAlertsResponse';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private client: HttpClient) { }

  getAlertsByUserId(userId: number) {
        return this.client.get<GetAlertsResponse[]>(
          `http://localhost:8080/alert`,
          { params: { id: userId } }
        );
  }
}

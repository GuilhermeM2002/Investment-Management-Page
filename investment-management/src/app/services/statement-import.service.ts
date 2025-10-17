import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatementImportService {
  private apiUrl = 'http://localhost:8080/statement-import';

  constructor(private http: HttpClient) {}

  importCsv(userId: number, file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', userId.toString());

    return this.http.post<void>(`${this.apiUrl}/csv`, formData);
  }

  importXlsx(userId: number, file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', userId.toString());

    return this.http.post<void>(`${this.apiUrl}/xlsx`, formData);
  }
}

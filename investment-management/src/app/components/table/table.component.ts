import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import { GetInvestmentResponse } from '../../types/GetInvestmentResponse';

@Component({
  selector: 'app-table',
  imports: [CommonModule ,MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [DecimalPipe],
})
export class TableComponent {
  @Input() investments: GetInvestmentResponse[] = [];

  displayedColumns: string[] = ['asset', 'quantity', 'price', 'variation', 'total'];
}

import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatTableModule} from "@angular/material/table";

export interface Investment {
  asset: string;
  quantity: number;
  price: number;
  variation: number;
  total: number;
}

@Component({
  selector: 'app-table',
  imports: [CommonModule ,MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [DecimalPipe],
})
export class TableComponent {
  @Input() investments: Investment[] = [];

  displayedColumns: string[] = ['asset', 'quantity', 'price', 'variation', 'total'];
}

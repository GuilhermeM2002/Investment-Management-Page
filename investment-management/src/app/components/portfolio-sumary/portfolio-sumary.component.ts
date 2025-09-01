import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-portfolio-sumary',
  imports: [CardComponent],
  templateUrl: './portfolio-sumary.component.html',
  styleUrl: './portfolio-sumary.component.scss'
})
export class PortfolioSumaryComponent {
  @Input() title: string = '';
  @Input() value: string = '';
}

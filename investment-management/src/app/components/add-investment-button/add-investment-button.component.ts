import { Component, Output, EventEmitter } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-add-investment-button',
  imports: [CardComponent],
  templateUrl: './add-investment-button.component.html',
  styleUrl: './add-investment-button.component.scss'
})
export class AddInvestmentButtonComponent {
  @Output("navigate") onNavigate = new EventEmitter();

  navigate(){
    this.onNavigate.emit();
  }
}

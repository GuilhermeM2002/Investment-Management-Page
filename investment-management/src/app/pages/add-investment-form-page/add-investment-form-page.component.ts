import { Component, Input } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InvestmentService } from '../../services/investment.service';
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
import { ToolBarComponent } from "../../components/tool-bar/tool-bar.component";
import { AppLayoutComponent } from "../../components/app-layout/app-layout.component";

interface InvestmentForm {
    id: FormControl;
    userId: FormControl;
    assetType: FormControl;
    ticker: FormControl;
    quantity: FormControl;
    buyPrice: FormControl;
    currentPrice: FormControl;
    date: FormControl;
}

@Component({
  selector: 'app-add-investment-form-page',
  imports: [CardComponent, ReactiveFormsModule, PrimaryInputComponent, AppLayoutComponent],
  templateUrl: './add-investment-form-page.component.html',
  styleUrl: './add-investment-form-page.component.scss'
})
export class AddInvestmentFormPageComponent {
  investmentForm!: FormGroup<InvestmentForm>;

  constructor(
    private investmentService: InvestmentService
  ) {
    this.investmentForm = new FormGroup<InvestmentForm>({
      id: new FormControl(0, [Validators.required, Validators.min(1)]),
      userId: new FormControl(0, [Validators.required, Validators.min(1)]),
      assetType: new FormControl('', [Validators.required, Validators.minLength(2)]),
      ticker: new FormControl('', [Validators.required, Validators.minLength(1)]),
      quantity: new FormControl(0, [Validators.required, Validators.min(1)]),
      buyPrice: new FormControl(0, [Validators.required, Validators.min(0.01)]),
      currentPrice: new FormControl(0, [Validators.required, Validators.min(0.01)]),
      date: new FormControl('', [Validators.required]),
    });
  }

  submitForm() {
    if (this.investmentForm.valid) {
      const formValue = this.investmentForm.value;
      this.investmentService.addInvestment(
        formValue.id!,
        formValue.userId!,
        formValue.assetType!,
        formValue.ticker!,
        formValue.quantity!,
        formValue.buyPrice!,
        formValue.currentPrice!,
        formValue.date!
      ).subscribe({
        next: (response) => {
          console.log('Investment added successfully', response);
          this.investmentForm.reset();
        },
        error: (error) => {
          console.error('Error adding investment', error);
        }
      });
    }
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvestmentFormPageComponent } from './add-investment-form-page.component';

describe('AddInvestmentFormPageComponent', () => {
  let component: AddInvestmentFormPageComponent;
  let fixture: ComponentFixture<AddInvestmentFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInvestmentFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInvestmentFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

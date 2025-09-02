import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvestmentButtonComponent } from './add-investment-button.component';

describe('AddInvestmentButtonComponent', () => {
  let component: AddInvestmentButtonComponent;
  let fixture: ComponentFixture<AddInvestmentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInvestmentButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInvestmentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

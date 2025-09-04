import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastInvestmentComponent } from './last-investment.component';

describe('LastInvestmentComponent', () => {
  let component: LastInvestmentComponent;
  let fixture: ComponentFixture<LastInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastInvestmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

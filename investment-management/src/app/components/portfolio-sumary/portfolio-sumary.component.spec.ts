import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSumaryComponent } from './portfolio-sumary.component';

describe('PortfolioSumaryComponent', () => {
  let component: PortfolioSumaryComponent;
  let fixture: ComponentFixture<PortfolioSumaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSumaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSumaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcCalculatorComponent } from './cc-calculator.component';

describe('CcCalculatorComponent', () => {
  let component: CcCalculatorComponent;
  let fixture: ComponentFixture<CcCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

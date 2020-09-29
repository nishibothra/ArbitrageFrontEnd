import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxCalculatorComponent } from './fx-calculator.component';

describe('FxCalculatorComponent', () => {
  let component: FxCalculatorComponent;
  let fixture: ComponentFixture<FxCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

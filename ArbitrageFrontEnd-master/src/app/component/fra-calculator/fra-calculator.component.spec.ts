import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraCalculatorComponent } from './fra-calculator.component';

describe('FraCalculatorComponent', () => {
  let component: FraCalculatorComponent;
  let fixture: ComponentFixture<FraCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

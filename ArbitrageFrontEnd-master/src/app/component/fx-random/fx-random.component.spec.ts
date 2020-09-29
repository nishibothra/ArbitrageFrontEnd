import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxRandomComponent } from './fx-random.component';

describe('FxRandomComponent', () => {
  let component: FxRandomComponent;
  let fixture: ComponentFixture<FxRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

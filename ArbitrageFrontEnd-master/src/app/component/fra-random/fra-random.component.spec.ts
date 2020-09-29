import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraRandomComponent } from './fra-random.component';

describe('FraRandomComponent', () => {
  let component: FraRandomComponent;
  let fixture: ComponentFixture<FraRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

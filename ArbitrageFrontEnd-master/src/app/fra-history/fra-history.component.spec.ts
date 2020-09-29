import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraHistoryComponent } from './fra-history.component';

describe('FraHistoryComponent', () => {
  let component: FraHistoryComponent;
  let fixture: ComponentFixture<FraHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

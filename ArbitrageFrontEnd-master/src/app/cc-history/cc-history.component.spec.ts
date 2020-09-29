import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcHistoryComponent } from './cc-history.component';

describe('CcHistoryComponent', () => {
  let component: CcHistoryComponent;
  let fixture: ComponentFixture<CcHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

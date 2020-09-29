import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxHistoryComponent } from './fx-history.component';

describe('FxHistoryComponent', () => {
  let component: FxHistoryComponent;
  let fixture: ComponentFixture<FxHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

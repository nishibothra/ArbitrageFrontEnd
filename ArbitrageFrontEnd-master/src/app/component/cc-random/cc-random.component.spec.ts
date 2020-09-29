import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcRandomComponent } from './cc-random.component';

describe('CcRandomComponent', () => {
  let component: CcRandomComponent;
  let fixture: ComponentFixture<CcRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

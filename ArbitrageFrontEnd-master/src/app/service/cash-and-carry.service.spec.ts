import { TestBed } from '@angular/core/testing';

import { CashAndCarryService } from './cash-and-carry.service';

describe('CashAndCarryService', () => {
  let service: CashAndCarryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashAndCarryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

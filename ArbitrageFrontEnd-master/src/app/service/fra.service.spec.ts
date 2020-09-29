import { TestBed } from '@angular/core/testing';

import { FraService } from './fra.service';

describe('FraService', () => {
  let service: FraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

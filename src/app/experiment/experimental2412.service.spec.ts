import { TestBed } from '@angular/core/testing';

import { Experimental2412Service } from './experimental2412.service';

describe('Experimental2412Service', () => {
  let service: Experimental2412Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2412Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

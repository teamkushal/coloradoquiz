import { TestBed } from '@angular/core/testing';

import { Experimental2496Service } from './experimental2496.service';

describe('Experimental2496Service', () => {
  let service: Experimental2496Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2496Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

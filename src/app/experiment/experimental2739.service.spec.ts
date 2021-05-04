import { TestBed } from '@angular/core/testing';

import { Experimental2739Service } from './experimental2739.service';

describe('Experimental2739Service', () => {
  let service: Experimental2739Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2739Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

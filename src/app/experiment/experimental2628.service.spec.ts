import { TestBed } from '@angular/core/testing';

import { Experimental2628Service } from './experimental2628.service';

describe('Experimental2628Service', () => {
  let service: Experimental2628Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2628Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

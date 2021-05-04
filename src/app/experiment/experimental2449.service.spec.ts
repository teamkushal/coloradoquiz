import { TestBed } from '@angular/core/testing';

import { Experimental2449Service } from './experimental2449.service';

describe('Experimental2449Service', () => {
  let service: Experimental2449Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2449Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

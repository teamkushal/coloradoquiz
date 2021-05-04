import { TestBed } from '@angular/core/testing';

import { Experimental2029Service } from './experimental2029.service';

describe('Experimental2029Service', () => {
  let service: Experimental2029Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2029Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2028Service } from './experimental2028.service';

describe('Experimental2028Service', () => {
  let service: Experimental2028Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2028Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

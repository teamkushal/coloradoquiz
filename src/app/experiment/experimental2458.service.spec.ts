import { TestBed } from '@angular/core/testing';

import { Experimental2458Service } from './experimental2458.service';

describe('Experimental2458Service', () => {
  let service: Experimental2458Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2458Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

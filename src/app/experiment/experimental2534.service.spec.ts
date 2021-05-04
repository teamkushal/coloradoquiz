import { TestBed } from '@angular/core/testing';

import { Experimental2534Service } from './experimental2534.service';

describe('Experimental2534Service', () => {
  let service: Experimental2534Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2534Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

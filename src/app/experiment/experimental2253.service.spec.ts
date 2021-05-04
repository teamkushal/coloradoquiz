import { TestBed } from '@angular/core/testing';

import { Experimental2253Service } from './experimental2253.service';

describe('Experimental2253Service', () => {
  let service: Experimental2253Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2253Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

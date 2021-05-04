import { TestBed } from '@angular/core/testing';

import { Experimental2027Service } from './experimental2027.service';

describe('Experimental2027Service', () => {
  let service: Experimental2027Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2027Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

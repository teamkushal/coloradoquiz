import { TestBed } from '@angular/core/testing';

import { Experimental2399Service } from './experimental2399.service';

describe('Experimental2399Service', () => {
  let service: Experimental2399Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2399Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

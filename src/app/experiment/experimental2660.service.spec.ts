import { TestBed } from '@angular/core/testing';

import { Experimental2660Service } from './experimental2660.service';

describe('Experimental2660Service', () => {
  let service: Experimental2660Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2660Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

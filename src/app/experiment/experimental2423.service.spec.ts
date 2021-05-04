import { TestBed } from '@angular/core/testing';

import { Experimental2423Service } from './experimental2423.service';

describe('Experimental2423Service', () => {
  let service: Experimental2423Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2423Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

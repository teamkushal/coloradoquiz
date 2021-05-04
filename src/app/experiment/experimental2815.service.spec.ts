import { TestBed } from '@angular/core/testing';

import { Experimental2815Service } from './experimental2815.service';

describe('Experimental2815Service', () => {
  let service: Experimental2815Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2815Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

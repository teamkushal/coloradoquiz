import { TestBed } from '@angular/core/testing';

import { Experimental2537Service } from './experimental2537.service';

describe('Experimental2537Service', () => {
  let service: Experimental2537Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2537Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

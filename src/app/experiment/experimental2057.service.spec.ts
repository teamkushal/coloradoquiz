import { TestBed } from '@angular/core/testing';

import { Experimental2057Service } from './experimental2057.service';

describe('Experimental2057Service', () => {
  let service: Experimental2057Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2057Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

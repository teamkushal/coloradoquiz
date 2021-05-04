import { TestBed } from '@angular/core/testing';

import { Experimental2202Service } from './experimental2202.service';

describe('Experimental2202Service', () => {
  let service: Experimental2202Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2202Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

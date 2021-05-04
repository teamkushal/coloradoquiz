import { TestBed } from '@angular/core/testing';

import { Experimental2318Service } from './experimental2318.service';

describe('Experimental2318Service', () => {
  let service: Experimental2318Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2318Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

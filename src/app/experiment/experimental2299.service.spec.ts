import { TestBed } from '@angular/core/testing';

import { Experimental2299Service } from './experimental2299.service';

describe('Experimental2299Service', () => {
  let service: Experimental2299Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2299Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

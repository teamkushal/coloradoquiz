import { TestBed } from '@angular/core/testing';

import { Experimental2137Service } from './experimental2137.service';

describe('Experimental2137Service', () => {
  let service: Experimental2137Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2137Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

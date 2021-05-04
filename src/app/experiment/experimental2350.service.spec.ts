import { TestBed } from '@angular/core/testing';

import { Experimental2350Service } from './experimental2350.service';

describe('Experimental2350Service', () => {
  let service: Experimental2350Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2350Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

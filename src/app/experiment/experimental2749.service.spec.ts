import { TestBed } from '@angular/core/testing';

import { Experimental2749Service } from './experimental2749.service';

describe('Experimental2749Service', () => {
  let service: Experimental2749Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2749Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

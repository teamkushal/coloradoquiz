import { TestBed } from '@angular/core/testing';

import { Experimental2976Service } from './experimental2976.service';

describe('Experimental2976Service', () => {
  let service: Experimental2976Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2976Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

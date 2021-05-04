import { TestBed } from '@angular/core/testing';

import { Experimental2902Service } from './experimental2902.service';

describe('Experimental2902Service', () => {
  let service: Experimental2902Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2902Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

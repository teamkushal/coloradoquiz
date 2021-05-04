import { TestBed } from '@angular/core/testing';

import { Experimental2671Service } from './experimental2671.service';

describe('Experimental2671Service', () => {
  let service: Experimental2671Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2671Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2691Service } from './experimental2691.service';

describe('Experimental2691Service', () => {
  let service: Experimental2691Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2691Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

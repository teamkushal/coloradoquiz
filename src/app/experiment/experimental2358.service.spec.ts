import { TestBed } from '@angular/core/testing';

import { Experimental2358Service } from './experimental2358.service';

describe('Experimental2358Service', () => {
  let service: Experimental2358Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2358Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

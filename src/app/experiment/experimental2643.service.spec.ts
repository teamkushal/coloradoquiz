import { TestBed } from '@angular/core/testing';

import { Experimental2643Service } from './experimental2643.service';

describe('Experimental2643Service', () => {
  let service: Experimental2643Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2643Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

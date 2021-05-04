import { TestBed } from '@angular/core/testing';

import { Experimental2271Service } from './experimental2271.service';

describe('Experimental2271Service', () => {
  let service: Experimental2271Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2271Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

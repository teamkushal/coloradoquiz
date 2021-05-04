import { TestBed } from '@angular/core/testing';

import { Experimental2313Service } from './experimental2313.service';

describe('Experimental2313Service', () => {
  let service: Experimental2313Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2313Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

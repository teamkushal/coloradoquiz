import { TestBed } from '@angular/core/testing';

import { Experimental2884Service } from './experimental2884.service';

describe('Experimental2884Service', () => {
  let service: Experimental2884Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2884Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

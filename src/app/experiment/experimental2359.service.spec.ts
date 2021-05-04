import { TestBed } from '@angular/core/testing';

import { Experimental2359Service } from './experimental2359.service';

describe('Experimental2359Service', () => {
  let service: Experimental2359Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2359Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

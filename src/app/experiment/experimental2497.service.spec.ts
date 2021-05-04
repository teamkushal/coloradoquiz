import { TestBed } from '@angular/core/testing';

import { Experimental2497Service } from './experimental2497.service';

describe('Experimental2497Service', () => {
  let service: Experimental2497Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2497Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

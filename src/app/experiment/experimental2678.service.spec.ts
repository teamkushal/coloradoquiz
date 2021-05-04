import { TestBed } from '@angular/core/testing';

import { Experimental2678Service } from './experimental2678.service';

describe('Experimental2678Service', () => {
  let service: Experimental2678Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2678Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

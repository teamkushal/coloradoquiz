import { TestBed } from '@angular/core/testing';

import { Experimental2553Service } from './experimental2553.service';

describe('Experimental2553Service', () => {
  let service: Experimental2553Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2553Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

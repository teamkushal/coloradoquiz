import { TestBed } from '@angular/core/testing';

import { Experimental2244Service } from './experimental2244.service';

describe('Experimental2244Service', () => {
  let service: Experimental2244Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2244Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

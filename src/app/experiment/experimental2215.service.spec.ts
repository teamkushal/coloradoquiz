import { TestBed } from '@angular/core/testing';

import { Experimental2215Service } from './experimental2215.service';

describe('Experimental2215Service', () => {
  let service: Experimental2215Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2215Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

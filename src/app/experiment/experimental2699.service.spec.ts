import { TestBed } from '@angular/core/testing';

import { Experimental2699Service } from './experimental2699.service';

describe('Experimental2699Service', () => {
  let service: Experimental2699Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2699Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

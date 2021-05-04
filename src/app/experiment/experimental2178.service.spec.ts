import { TestBed } from '@angular/core/testing';

import { Experimental2178Service } from './experimental2178.service';

describe('Experimental2178Service', () => {
  let service: Experimental2178Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2178Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

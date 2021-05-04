import { TestBed } from '@angular/core/testing';

import { Experimental2596Service } from './experimental2596.service';

describe('Experimental2596Service', () => {
  let service: Experimental2596Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2596Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2790Service } from './experimental2790.service';

describe('Experimental2790Service', () => {
  let service: Experimental2790Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2790Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

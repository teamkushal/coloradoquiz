import { TestBed } from '@angular/core/testing';

import { Experimental2176Service } from './experimental2176.service';

describe('Experimental2176Service', () => {
  let service: Experimental2176Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2176Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

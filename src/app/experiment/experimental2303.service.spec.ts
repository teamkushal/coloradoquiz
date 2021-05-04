import { TestBed } from '@angular/core/testing';

import { Experimental2303Service } from './experimental2303.service';

describe('Experimental2303Service', () => {
  let service: Experimental2303Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2303Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

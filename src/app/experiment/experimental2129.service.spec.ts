import { TestBed } from '@angular/core/testing';

import { Experimental2129Service } from './experimental2129.service';

describe('Experimental2129Service', () => {
  let service: Experimental2129Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2129Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

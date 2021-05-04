import { TestBed } from '@angular/core/testing';

import { Experimental2119Service } from './experimental2119.service';

describe('Experimental2119Service', () => {
  let service: Experimental2119Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2119Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

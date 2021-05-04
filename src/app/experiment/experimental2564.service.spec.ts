import { TestBed } from '@angular/core/testing';

import { Experimental2564Service } from './experimental2564.service';

describe('Experimental2564Service', () => {
  let service: Experimental2564Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2564Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

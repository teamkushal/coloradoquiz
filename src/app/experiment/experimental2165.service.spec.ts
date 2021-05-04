import { TestBed } from '@angular/core/testing';

import { Experimental2165Service } from './experimental2165.service';

describe('Experimental2165Service', () => {
  let service: Experimental2165Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2165Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

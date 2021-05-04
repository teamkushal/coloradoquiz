import { TestBed } from '@angular/core/testing';

import { Experimental2682Service } from './experimental2682.service';

describe('Experimental2682Service', () => {
  let service: Experimental2682Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2682Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

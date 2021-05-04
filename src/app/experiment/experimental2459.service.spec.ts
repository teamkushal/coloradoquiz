import { TestBed } from '@angular/core/testing';

import { Experimental2459Service } from './experimental2459.service';

describe('Experimental2459Service', () => {
  let service: Experimental2459Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2459Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2698Service } from './experimental2698.service';

describe('Experimental2698Service', () => {
  let service: Experimental2698Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2698Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

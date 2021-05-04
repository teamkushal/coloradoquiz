import { TestBed } from '@angular/core/testing';

import { Experimental3045Service } from './experimental3045.service';

describe('Experimental3045Service', () => {
  let service: Experimental3045Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3045Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

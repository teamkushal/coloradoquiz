import { TestBed } from '@angular/core/testing';

import { Experimental3103Service } from './experimental3103.service';

describe('Experimental3103Service', () => {
  let service: Experimental3103Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3103Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

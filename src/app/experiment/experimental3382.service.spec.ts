import { TestBed } from '@angular/core/testing';

import { Experimental3382Service } from './experimental3382.service';

describe('Experimental3382Service', () => {
  let service: Experimental3382Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3382Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental3469Service } from './experimental3469.service';

describe('Experimental3469Service', () => {
  let service: Experimental3469Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3469Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

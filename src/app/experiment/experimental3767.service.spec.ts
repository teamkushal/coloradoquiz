import { TestBed } from '@angular/core/testing';

import { Experimental3767Service } from './experimental3767.service';

describe('Experimental3767Service', () => {
  let service: Experimental3767Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3767Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

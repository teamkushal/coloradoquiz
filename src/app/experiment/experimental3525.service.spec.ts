import { TestBed } from '@angular/core/testing';

import { Experimental3525Service } from './experimental3525.service';

describe('Experimental3525Service', () => {
  let service: Experimental3525Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3525Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

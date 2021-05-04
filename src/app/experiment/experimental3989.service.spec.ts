import { TestBed } from '@angular/core/testing';

import { Experimental3989Service } from './experimental3989.service';

describe('Experimental3989Service', () => {
  let service: Experimental3989Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3989Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

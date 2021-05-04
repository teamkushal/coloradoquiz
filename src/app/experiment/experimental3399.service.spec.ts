import { TestBed } from '@angular/core/testing';

import { Experimental3399Service } from './experimental3399.service';

describe('Experimental3399Service', () => {
  let service: Experimental3399Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3399Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

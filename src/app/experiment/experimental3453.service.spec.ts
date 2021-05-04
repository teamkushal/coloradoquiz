import { TestBed } from '@angular/core/testing';

import { Experimental3453Service } from './experimental3453.service';

describe('Experimental3453Service', () => {
  let service: Experimental3453Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3453Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

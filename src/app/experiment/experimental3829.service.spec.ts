import { TestBed } from '@angular/core/testing';

import { Experimental3829Service } from './experimental3829.service';

describe('Experimental3829Service', () => {
  let service: Experimental3829Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3829Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental3630Service } from './experimental3630.service';

describe('Experimental3630Service', () => {
  let service: Experimental3630Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3630Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

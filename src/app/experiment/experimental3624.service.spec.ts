import { TestBed } from '@angular/core/testing';

import { Experimental3624Service } from './experimental3624.service';

describe('Experimental3624Service', () => {
  let service: Experimental3624Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3624Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

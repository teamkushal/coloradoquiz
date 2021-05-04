import { TestBed } from '@angular/core/testing';

import { Experimental3542Service } from './experimental3542.service';

describe('Experimental3542Service', () => {
  let service: Experimental3542Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3542Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

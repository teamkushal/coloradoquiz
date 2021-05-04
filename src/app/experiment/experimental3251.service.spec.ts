import { TestBed } from '@angular/core/testing';

import { Experimental3251Service } from './experimental3251.service';

describe('Experimental3251Service', () => {
  let service: Experimental3251Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3251Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

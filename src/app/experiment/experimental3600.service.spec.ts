import { TestBed } from '@angular/core/testing';

import { Experimental3600Service } from './experimental3600.service';

describe('Experimental3600Service', () => {
  let service: Experimental3600Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3600Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

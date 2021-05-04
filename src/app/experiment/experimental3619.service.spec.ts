import { TestBed } from '@angular/core/testing';

import { Experimental3619Service } from './experimental3619.service';

describe('Experimental3619Service', () => {
  let service: Experimental3619Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3619Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

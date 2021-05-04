import { TestBed } from '@angular/core/testing';

import { Experimental3013Service } from './experimental3013.service';

describe('Experimental3013Service', () => {
  let service: Experimental3013Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3013Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

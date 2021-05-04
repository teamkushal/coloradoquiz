import { TestBed } from '@angular/core/testing';

import { Experimental3494Service } from './experimental3494.service';

describe('Experimental3494Service', () => {
  let service: Experimental3494Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3494Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental3670Service } from './experimental3670.service';

describe('Experimental3670Service', () => {
  let service: Experimental3670Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3670Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

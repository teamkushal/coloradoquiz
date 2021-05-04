import { TestBed } from '@angular/core/testing';

import { Experimental3236Service } from './experimental3236.service';

describe('Experimental3236Service', () => {
  let service: Experimental3236Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3236Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

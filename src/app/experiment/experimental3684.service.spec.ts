import { TestBed } from '@angular/core/testing';

import { Experimental3684Service } from './experimental3684.service';

describe('Experimental3684Service', () => {
  let service: Experimental3684Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3684Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

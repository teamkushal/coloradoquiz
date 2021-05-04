import { TestBed } from '@angular/core/testing';

import { Experimental3740Service } from './experimental3740.service';

describe('Experimental3740Service', () => {
  let service: Experimental3740Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3740Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

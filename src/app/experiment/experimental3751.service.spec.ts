import { TestBed } from '@angular/core/testing';

import { Experimental3751Service } from './experimental3751.service';

describe('Experimental3751Service', () => {
  let service: Experimental3751Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3751Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

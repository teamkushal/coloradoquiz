import { TestBed } from '@angular/core/testing';

import { Experimental3610Service } from './experimental3610.service';

describe('Experimental3610Service', () => {
  let service: Experimental3610Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3610Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental3390Service } from './experimental3390.service';

describe('Experimental3390Service', () => {
  let service: Experimental3390Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3390Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

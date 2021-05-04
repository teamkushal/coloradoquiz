import { TestBed } from '@angular/core/testing';

import { Experimental3601Service } from './experimental3601.service';

describe('Experimental3601Service', () => {
  let service: Experimental3601Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3601Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental3343Service } from './experimental3343.service';

describe('Experimental3343Service', () => {
  let service: Experimental3343Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3343Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

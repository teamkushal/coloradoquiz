import { TestBed } from '@angular/core/testing';

import { Experimental3836Service } from './experimental3836.service';

describe('Experimental3836Service', () => {
  let service: Experimental3836Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3836Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental3495Service } from './experimental3495.service';

describe('Experimental3495Service', () => {
  let service: Experimental3495Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3495Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

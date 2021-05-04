import { TestBed } from '@angular/core/testing';

import { Experimental3028Service } from './experimental3028.service';

describe('Experimental3028Service', () => {
  let service: Experimental3028Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3028Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

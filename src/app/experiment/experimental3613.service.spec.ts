import { TestBed } from '@angular/core/testing';

import { Experimental3613Service } from './experimental3613.service';

describe('Experimental3613Service', () => {
  let service: Experimental3613Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3613Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

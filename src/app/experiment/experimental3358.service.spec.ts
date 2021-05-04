import { TestBed } from '@angular/core/testing';

import { Experimental3358Service } from './experimental3358.service';

describe('Experimental3358Service', () => {
  let service: Experimental3358Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3358Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

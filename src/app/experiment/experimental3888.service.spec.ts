import { TestBed } from '@angular/core/testing';

import { Experimental3888Service } from './experimental3888.service';

describe('Experimental3888Service', () => {
  let service: Experimental3888Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3888Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

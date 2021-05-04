import { TestBed } from '@angular/core/testing';

import { Experimental3698Service } from './experimental3698.service';

describe('Experimental3698Service', () => {
  let service: Experimental3698Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3698Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

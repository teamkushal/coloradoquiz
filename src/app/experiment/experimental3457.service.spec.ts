import { TestBed } from '@angular/core/testing';

import { Experimental3457Service } from './experimental3457.service';

describe('Experimental3457Service', () => {
  let service: Experimental3457Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3457Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

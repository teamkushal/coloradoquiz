import { TestBed } from '@angular/core/testing';

import { Experimental3467Service } from './experimental3467.service';

describe('Experimental3467Service', () => {
  let service: Experimental3467Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3467Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental3973Service } from './experimental3973.service';

describe('Experimental3973Service', () => {
  let service: Experimental3973Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3973Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

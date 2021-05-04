import { TestBed } from '@angular/core/testing';

import { Experimental3969Service } from './experimental3969.service';

describe('Experimental3969Service', () => {
  let service: Experimental3969Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3969Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental3394Service } from './experimental3394.service';

describe('Experimental3394Service', () => {
  let service: Experimental3394Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3394Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

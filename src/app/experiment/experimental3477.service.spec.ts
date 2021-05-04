import { TestBed } from '@angular/core/testing';

import { Experimental3477Service } from './experimental3477.service';

describe('Experimental3477Service', () => {
  let service: Experimental3477Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3477Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

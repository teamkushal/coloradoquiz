import { TestBed } from '@angular/core/testing';

import { Experimental3729Service } from './experimental3729.service';

describe('Experimental3729Service', () => {
  let service: Experimental3729Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3729Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

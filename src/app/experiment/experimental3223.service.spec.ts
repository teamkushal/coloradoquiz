import { TestBed } from '@angular/core/testing';

import { Experimental3223Service } from './experimental3223.service';

describe('Experimental3223Service', () => {
  let service: Experimental3223Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3223Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

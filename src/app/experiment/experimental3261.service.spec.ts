import { TestBed } from '@angular/core/testing';

import { Experimental3261Service } from './experimental3261.service';

describe('Experimental3261Service', () => {
  let service: Experimental3261Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3261Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

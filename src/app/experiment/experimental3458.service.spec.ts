import { TestBed } from '@angular/core/testing';

import { Experimental3458Service } from './experimental3458.service';

describe('Experimental3458Service', () => {
  let service: Experimental3458Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3458Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

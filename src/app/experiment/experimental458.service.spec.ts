import { TestBed } from '@angular/core/testing';

import { Experimental458Service } from './experimental458.service';

describe('Experimental458Service', () => {
  let service: Experimental458Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental458Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

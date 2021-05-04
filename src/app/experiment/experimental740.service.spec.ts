import { TestBed } from '@angular/core/testing';

import { Experimental740Service } from './experimental740.service';

describe('Experimental740Service', () => {
  let service: Experimental740Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental740Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

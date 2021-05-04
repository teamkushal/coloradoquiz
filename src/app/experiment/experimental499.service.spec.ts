import { TestBed } from '@angular/core/testing';

import { Experimental499Service } from './experimental499.service';

describe('Experimental499Service', () => {
  let service: Experimental499Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental499Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

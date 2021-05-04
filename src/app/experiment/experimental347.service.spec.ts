import { TestBed } from '@angular/core/testing';

import { Experimental347Service } from './experimental347.service';

describe('Experimental347Service', () => {
  let service: Experimental347Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental347Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2347Service } from './experimental2347.service';

describe('Experimental2347Service', () => {
  let service: Experimental2347Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2347Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

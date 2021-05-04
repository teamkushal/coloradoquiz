import { TestBed } from '@angular/core/testing';

import { Experimental2266Service } from './experimental2266.service';

describe('Experimental2266Service', () => {
  let service: Experimental2266Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2266Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

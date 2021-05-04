import { TestBed } from '@angular/core/testing';

import { Experimental252Service } from './experimental252.service';

describe('Experimental252Service', () => {
  let service: Experimental252Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental252Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental410Service } from './experimental410.service';

describe('Experimental410Service', () => {
  let service: Experimental410Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental410Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

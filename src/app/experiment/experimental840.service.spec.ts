import { TestBed } from '@angular/core/testing';

import { Experimental840Service } from './experimental840.service';

describe('Experimental840Service', () => {
  let service: Experimental840Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental840Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental964Service } from './experimental964.service';

describe('Experimental964Service', () => {
  let service: Experimental964Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental964Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

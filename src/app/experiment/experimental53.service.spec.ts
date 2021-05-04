import { TestBed } from '@angular/core/testing';

import { Experimental53Service } from './experimental53.service';

describe('Experimental53Service', () => {
  let service: Experimental53Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental53Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

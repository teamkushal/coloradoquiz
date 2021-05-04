import { TestBed } from '@angular/core/testing';

import { Experimental456Service } from './experimental456.service';

describe('Experimental456Service', () => {
  let service: Experimental456Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental456Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

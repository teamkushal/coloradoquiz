import { TestBed } from '@angular/core/testing';

import { Experimental471Service } from './experimental471.service';

describe('Experimental471Service', () => {
  let service: Experimental471Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental471Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

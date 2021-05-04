import { TestBed } from '@angular/core/testing';

import { Experimental2235Service } from './experimental2235.service';

describe('Experimental2235Service', () => {
  let service: Experimental2235Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2235Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

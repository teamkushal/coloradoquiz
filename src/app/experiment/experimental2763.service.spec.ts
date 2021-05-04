import { TestBed } from '@angular/core/testing';

import { Experimental2763Service } from './experimental2763.service';

describe('Experimental2763Service', () => {
  let service: Experimental2763Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2763Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

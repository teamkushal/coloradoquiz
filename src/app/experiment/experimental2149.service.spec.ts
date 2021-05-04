import { TestBed } from '@angular/core/testing';

import { Experimental2149Service } from './experimental2149.service';

describe('Experimental2149Service', () => {
  let service: Experimental2149Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2149Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

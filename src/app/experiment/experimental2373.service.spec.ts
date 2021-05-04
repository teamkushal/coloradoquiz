import { TestBed } from '@angular/core/testing';

import { Experimental2373Service } from './experimental2373.service';

describe('Experimental2373Service', () => {
  let service: Experimental2373Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2373Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

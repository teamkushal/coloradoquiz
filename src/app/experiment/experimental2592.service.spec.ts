import { TestBed } from '@angular/core/testing';

import { Experimental2592Service } from './experimental2592.service';

describe('Experimental2592Service', () => {
  let service: Experimental2592Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2592Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

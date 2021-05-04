import { TestBed } from '@angular/core/testing';

import { Experimental2220Service } from './experimental2220.service';

describe('Experimental2220Service', () => {
  let service: Experimental2220Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2220Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

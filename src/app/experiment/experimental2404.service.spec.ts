import { TestBed } from '@angular/core/testing';

import { Experimental2404Service } from './experimental2404.service';

describe('Experimental2404Service', () => {
  let service: Experimental2404Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2404Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

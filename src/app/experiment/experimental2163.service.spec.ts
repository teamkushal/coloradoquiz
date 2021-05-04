import { TestBed } from '@angular/core/testing';

import { Experimental2163Service } from './experimental2163.service';

describe('Experimental2163Service', () => {
  let service: Experimental2163Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2163Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

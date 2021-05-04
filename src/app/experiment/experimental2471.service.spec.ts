import { TestBed } from '@angular/core/testing';

import { Experimental2471Service } from './experimental2471.service';

describe('Experimental2471Service', () => {
  let service: Experimental2471Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2471Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

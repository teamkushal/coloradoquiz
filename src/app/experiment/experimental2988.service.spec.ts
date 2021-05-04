import { TestBed } from '@angular/core/testing';

import { Experimental2988Service } from './experimental2988.service';

describe('Experimental2988Service', () => {
  let service: Experimental2988Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2988Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

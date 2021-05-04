import { TestBed } from '@angular/core/testing';

import { Experimental2807Service } from './experimental2807.service';

describe('Experimental2807Service', () => {
  let service: Experimental2807Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2807Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

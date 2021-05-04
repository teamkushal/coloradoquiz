import { TestBed } from '@angular/core/testing';

import { Experimental2296Service } from './experimental2296.service';

describe('Experimental2296Service', () => {
  let service: Experimental2296Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2296Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

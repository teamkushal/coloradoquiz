import { TestBed } from '@angular/core/testing';

import { Experimental2667Service } from './experimental2667.service';

describe('Experimental2667Service', () => {
  let service: Experimental2667Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2667Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

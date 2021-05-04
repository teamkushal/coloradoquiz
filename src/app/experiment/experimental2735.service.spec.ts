import { TestBed } from '@angular/core/testing';

import { Experimental2735Service } from './experimental2735.service';

describe('Experimental2735Service', () => {
  let service: Experimental2735Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2735Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

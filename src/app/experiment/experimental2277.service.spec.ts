import { TestBed } from '@angular/core/testing';

import { Experimental2277Service } from './experimental2277.service';

describe('Experimental2277Service', () => {
  let service: Experimental2277Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2277Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

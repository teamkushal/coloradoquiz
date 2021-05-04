import { TestBed } from '@angular/core/testing';

import { Experimental2629Service } from './experimental2629.service';

describe('Experimental2629Service', () => {
  let service: Experimental2629Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2629Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

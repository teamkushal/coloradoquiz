import { TestBed } from '@angular/core/testing';

import { Experimental2765Service } from './experimental2765.service';

describe('Experimental2765Service', () => {
  let service: Experimental2765Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2765Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

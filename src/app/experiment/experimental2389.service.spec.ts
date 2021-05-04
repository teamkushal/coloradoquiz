import { TestBed } from '@angular/core/testing';

import { Experimental2389Service } from './experimental2389.service';

describe('Experimental2389Service', () => {
  let service: Experimental2389Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2389Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

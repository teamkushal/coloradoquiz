import { TestBed } from '@angular/core/testing';

import { Experimental2924Service } from './experimental2924.service';

describe('Experimental2924Service', () => {
  let service: Experimental2924Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2924Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

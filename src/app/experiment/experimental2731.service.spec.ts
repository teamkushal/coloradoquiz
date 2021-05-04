import { TestBed } from '@angular/core/testing';

import { Experimental2731Service } from './experimental2731.service';

describe('Experimental2731Service', () => {
  let service: Experimental2731Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2731Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2598Service } from './experimental2598.service';

describe('Experimental2598Service', () => {
  let service: Experimental2598Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2598Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

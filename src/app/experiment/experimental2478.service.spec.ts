import { TestBed } from '@angular/core/testing';

import { Experimental2478Service } from './experimental2478.service';

describe('Experimental2478Service', () => {
  let service: Experimental2478Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2478Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

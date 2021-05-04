import { TestBed } from '@angular/core/testing';

import { Experimental2181Service } from './experimental2181.service';

describe('Experimental2181Service', () => {
  let service: Experimental2181Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2181Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

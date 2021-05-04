import { TestBed } from '@angular/core/testing';

import { Experimental2912Service } from './experimental2912.service';

describe('Experimental2912Service', () => {
  let service: Experimental2912Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2912Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

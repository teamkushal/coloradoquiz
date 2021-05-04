import { TestBed } from '@angular/core/testing';

import { Experimental2679Service } from './experimental2679.service';

describe('Experimental2679Service', () => {
  let service: Experimental2679Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2679Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

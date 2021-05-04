import { TestBed } from '@angular/core/testing';

import { Experimental2034Service } from './experimental2034.service';

describe('Experimental2034Service', () => {
  let service: Experimental2034Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2034Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

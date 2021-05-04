import { TestBed } from '@angular/core/testing';

import { Experimental2161Service } from './experimental2161.service';

describe('Experimental2161Service', () => {
  let service: Experimental2161Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2161Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

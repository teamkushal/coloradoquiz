import { TestBed } from '@angular/core/testing';

import { Experimental2294Service } from './experimental2294.service';

describe('Experimental2294Service', () => {
  let service: Experimental2294Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2294Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

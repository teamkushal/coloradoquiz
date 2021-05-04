import { TestBed } from '@angular/core/testing';

import { Experimental2051Service } from './experimental2051.service';

describe('Experimental2051Service', () => {
  let service: Experimental2051Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2051Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

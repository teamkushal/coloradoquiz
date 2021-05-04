import { TestBed } from '@angular/core/testing';

import { Experimental2134Service } from './experimental2134.service';

describe('Experimental2134Service', () => {
  let service: Experimental2134Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2134Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

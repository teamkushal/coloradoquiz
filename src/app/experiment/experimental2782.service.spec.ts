import { TestBed } from '@angular/core/testing';

import { Experimental2782Service } from './experimental2782.service';

describe('Experimental2782Service', () => {
  let service: Experimental2782Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2782Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

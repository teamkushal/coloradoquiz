import { TestBed } from '@angular/core/testing';

import { Experimental2533Service } from './experimental2533.service';

describe('Experimental2533Service', () => {
  let service: Experimental2533Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2533Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

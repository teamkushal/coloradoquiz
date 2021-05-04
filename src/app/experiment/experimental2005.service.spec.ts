import { TestBed } from '@angular/core/testing';

import { Experimental2005Service } from './experimental2005.service';

describe('Experimental2005Service', () => {
  let service: Experimental2005Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2005Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

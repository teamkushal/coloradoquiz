import { TestBed } from '@angular/core/testing';

import { Experimental2013Service } from './experimental2013.service';

describe('Experimental2013Service', () => {
  let service: Experimental2013Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2013Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

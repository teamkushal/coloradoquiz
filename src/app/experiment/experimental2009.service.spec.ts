import { TestBed } from '@angular/core/testing';

import { Experimental2009Service } from './experimental2009.service';

describe('Experimental2009Service', () => {
  let service: Experimental2009Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2009Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

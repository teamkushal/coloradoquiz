import { TestBed } from '@angular/core/testing';

import { Experimental2015Service } from './experimental2015.service';

describe('Experimental2015Service', () => {
  let service: Experimental2015Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2015Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

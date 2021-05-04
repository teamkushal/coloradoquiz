import { TestBed } from '@angular/core/testing';

import { Experimental2007Service } from './experimental2007.service';

describe('Experimental2007Service', () => {
  let service: Experimental2007Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2007Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

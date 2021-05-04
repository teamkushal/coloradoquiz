import { TestBed } from '@angular/core/testing';

import { Experimental2993Service } from './experimental2993.service';

describe('Experimental2993Service', () => {
  let service: Experimental2993Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2993Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2750Service } from './experimental2750.service';

describe('Experimental2750Service', () => {
  let service: Experimental2750Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2750Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

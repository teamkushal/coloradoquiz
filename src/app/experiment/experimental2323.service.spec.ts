import { TestBed } from '@angular/core/testing';

import { Experimental2323Service } from './experimental2323.service';

describe('Experimental2323Service', () => {
  let service: Experimental2323Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2323Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

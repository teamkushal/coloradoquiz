import { TestBed } from '@angular/core/testing';

import { Experimental2886Service } from './experimental2886.service';

describe('Experimental2886Service', () => {
  let service: Experimental2886Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2886Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental886Service } from './experimental886.service';

describe('Experimental886Service', () => {
  let service: Experimental886Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental886Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

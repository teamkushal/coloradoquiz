import { TestBed } from '@angular/core/testing';

import { Experimental2351Service } from './experimental2351.service';

describe('Experimental2351Service', () => {
  let service: Experimental2351Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2351Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

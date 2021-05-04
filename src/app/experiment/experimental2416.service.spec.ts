import { TestBed } from '@angular/core/testing';

import { Experimental2416Service } from './experimental2416.service';

describe('Experimental2416Service', () => {
  let service: Experimental2416Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2416Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

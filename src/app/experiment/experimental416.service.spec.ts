import { TestBed } from '@angular/core/testing';

import { Experimental416Service } from './experimental416.service';

describe('Experimental416Service', () => {
  let service: Experimental416Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental416Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

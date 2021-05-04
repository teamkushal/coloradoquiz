import { TestBed } from '@angular/core/testing';

import { Experimental2921Service } from './experimental2921.service';

describe('Experimental2921Service', () => {
  let service: Experimental2921Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2921Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

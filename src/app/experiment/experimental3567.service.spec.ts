import { TestBed } from '@angular/core/testing';

import { Experimental3567Service } from './experimental3567.service';

describe('Experimental3567Service', () => {
  let service: Experimental3567Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3567Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

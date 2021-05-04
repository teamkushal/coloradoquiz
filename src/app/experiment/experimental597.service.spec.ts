import { TestBed } from '@angular/core/testing';

import { Experimental597Service } from './experimental597.service';

describe('Experimental597Service', () => {
  let service: Experimental597Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental597Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

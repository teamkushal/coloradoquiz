import { TestBed } from '@angular/core/testing';

import { Experimental895Service } from './experimental895.service';

describe('Experimental895Service', () => {
  let service: Experimental895Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental895Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental393Service } from './experimental393.service';

describe('Experimental393Service', () => {
  let service: Experimental393Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental393Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental3761Service } from './experimental3761.service';

describe('Experimental3761Service', () => {
  let service: Experimental3761Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3761Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental3854Service } from './experimental3854.service';

describe('Experimental3854Service', () => {
  let service: Experimental3854Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3854Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental1854Service } from './experimental1854.service';

describe('Experimental1854Service', () => {
  let service: Experimental1854Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1854Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

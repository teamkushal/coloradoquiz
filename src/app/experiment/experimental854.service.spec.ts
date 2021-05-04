import { TestBed } from '@angular/core/testing';

import { Experimental854Service } from './experimental854.service';

describe('Experimental854Service', () => {
  let service: Experimental854Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental854Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

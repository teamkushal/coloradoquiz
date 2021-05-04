import { TestBed } from '@angular/core/testing';

import { Experimental78Service } from './experimental78.service';

describe('Experimental78Service', () => {
  let service: Experimental78Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental78Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

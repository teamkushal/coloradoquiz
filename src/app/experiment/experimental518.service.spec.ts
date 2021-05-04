import { TestBed } from '@angular/core/testing';

import { Experimental518Service } from './experimental518.service';

describe('Experimental518Service', () => {
  let service: Experimental518Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental518Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental208Service } from './experimental208.service';

describe('Experimental208Service', () => {
  let service: Experimental208Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental208Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

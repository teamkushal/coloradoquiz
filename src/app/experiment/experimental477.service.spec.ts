import { TestBed } from '@angular/core/testing';

import { Experimental477Service } from './experimental477.service';

describe('Experimental477Service', () => {
  let service: Experimental477Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental477Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

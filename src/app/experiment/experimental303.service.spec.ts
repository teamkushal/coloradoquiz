import { TestBed } from '@angular/core/testing';

import { Experimental303Service } from './experimental303.service';

describe('Experimental303Service', () => {
  let service: Experimental303Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental303Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

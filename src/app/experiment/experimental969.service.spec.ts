import { TestBed } from '@angular/core/testing';

import { Experimental969Service } from './experimental969.service';

describe('Experimental969Service', () => {
  let service: Experimental969Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental969Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

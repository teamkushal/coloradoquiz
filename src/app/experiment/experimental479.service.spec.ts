import { TestBed } from '@angular/core/testing';

import { Experimental479Service } from './experimental479.service';

describe('Experimental479Service', () => {
  let service: Experimental479Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental479Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

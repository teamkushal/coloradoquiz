import { TestBed } from '@angular/core/testing';

import { Experimental480Service } from './experimental480.service';

describe('Experimental480Service', () => {
  let service: Experimental480Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental480Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

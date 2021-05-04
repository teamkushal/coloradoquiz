import { TestBed } from '@angular/core/testing';

import { Experimental360Service } from './experimental360.service';

describe('Experimental360Service', () => {
  let service: Experimental360Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental360Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

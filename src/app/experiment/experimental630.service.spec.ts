import { TestBed } from '@angular/core/testing';

import { Experimental630Service } from './experimental630.service';

describe('Experimental630Service', () => {
  let service: Experimental630Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental630Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

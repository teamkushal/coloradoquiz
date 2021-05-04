import { TestBed } from '@angular/core/testing';

import { Experimental1943Service } from './experimental1943.service';

describe('Experimental1943Service', () => {
  let service: Experimental1943Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1943Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

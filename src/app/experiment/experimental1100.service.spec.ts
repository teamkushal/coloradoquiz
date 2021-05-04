import { TestBed } from '@angular/core/testing';

import { Experimental1100Service } from './experimental1100.service';

describe('Experimental1100Service', () => {
  let service: Experimental1100Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1100Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

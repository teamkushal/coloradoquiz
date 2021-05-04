import { TestBed } from '@angular/core/testing';

import { Experimental1694Service } from './experimental1694.service';

describe('Experimental1694Service', () => {
  let service: Experimental1694Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1694Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

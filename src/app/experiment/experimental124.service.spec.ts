import { TestBed } from '@angular/core/testing';

import { Experimental124Service } from './experimental124.service';

describe('Experimental124Service', () => {
  let service: Experimental124Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental124Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

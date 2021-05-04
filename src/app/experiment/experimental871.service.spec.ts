import { TestBed } from '@angular/core/testing';

import { Experimental871Service } from './experimental871.service';

describe('Experimental871Service', () => {
  let service: Experimental871Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental871Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

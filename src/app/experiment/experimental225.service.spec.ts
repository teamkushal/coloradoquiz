import { TestBed } from '@angular/core/testing';

import { Experimental225Service } from './experimental225.service';

describe('Experimental225Service', () => {
  let service: Experimental225Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental225Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental546Service } from './experimental546.service';

describe('Experimental546Service', () => {
  let service: Experimental546Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental546Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

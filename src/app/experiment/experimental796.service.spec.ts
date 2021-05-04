import { TestBed } from '@angular/core/testing';

import { Experimental796Service } from './experimental796.service';

describe('Experimental796Service', () => {
  let service: Experimental796Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental796Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

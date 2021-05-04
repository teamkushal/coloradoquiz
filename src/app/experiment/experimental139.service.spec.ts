import { TestBed } from '@angular/core/testing';

import { Experimental139Service } from './experimental139.service';

describe('Experimental139Service', () => {
  let service: Experimental139Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental139Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

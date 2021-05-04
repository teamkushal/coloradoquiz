import { TestBed } from '@angular/core/testing';

import { Experimental2208Service } from './experimental2208.service';

describe('Experimental2208Service', () => {
  let service: Experimental2208Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2208Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

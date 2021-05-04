import { TestBed } from '@angular/core/testing';

import { Experimental2436Service } from './experimental2436.service';

describe('Experimental2436Service', () => {
  let service: Experimental2436Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2436Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

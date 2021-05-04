import { TestBed } from '@angular/core/testing';

import { Experimental248Service } from './experimental248.service';

describe('Experimental248Service', () => {
  let service: Experimental248Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental248Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

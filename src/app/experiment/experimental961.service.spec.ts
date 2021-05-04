import { TestBed } from '@angular/core/testing';

import { Experimental961Service } from './experimental961.service';

describe('Experimental961Service', () => {
  let service: Experimental961Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental961Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental408Service } from './experimental408.service';

describe('Experimental408Service', () => {
  let service: Experimental408Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental408Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

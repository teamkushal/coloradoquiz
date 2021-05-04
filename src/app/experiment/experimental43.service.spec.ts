import { TestBed } from '@angular/core/testing';

import { Experimental43Service } from './experimental43.service';

describe('Experimental43Service', () => {
  let service: Experimental43Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental43Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental639Service } from './experimental639.service';

describe('Experimental639Service', () => {
  let service: Experimental639Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental639Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

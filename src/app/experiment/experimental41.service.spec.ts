import { TestBed } from '@angular/core/testing';

import { Experimental41Service } from './experimental41.service';

describe('Experimental41Service', () => {
  let service: Experimental41Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental41Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

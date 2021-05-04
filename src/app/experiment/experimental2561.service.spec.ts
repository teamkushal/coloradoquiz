import { TestBed } from '@angular/core/testing';

import { Experimental2561Service } from './experimental2561.service';

describe('Experimental2561Service', () => {
  let service: Experimental2561Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2561Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

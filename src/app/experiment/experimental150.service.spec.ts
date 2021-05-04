import { TestBed } from '@angular/core/testing';

import { Experimental150Service } from './experimental150.service';

describe('Experimental150Service', () => {
  let service: Experimental150Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental150Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

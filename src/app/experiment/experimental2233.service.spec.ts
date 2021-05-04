import { TestBed } from '@angular/core/testing';

import { Experimental2233Service } from './experimental2233.service';

describe('Experimental2233Service', () => {
  let service: Experimental2233Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2233Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

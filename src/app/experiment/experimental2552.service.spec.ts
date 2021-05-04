import { TestBed } from '@angular/core/testing';

import { Experimental2552Service } from './experimental2552.service';

describe('Experimental2552Service', () => {
  let service: Experimental2552Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2552Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

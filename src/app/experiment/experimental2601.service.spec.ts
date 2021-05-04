import { TestBed } from '@angular/core/testing';

import { Experimental2601Service } from './experimental2601.service';

describe('Experimental2601Service', () => {
  let service: Experimental2601Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2601Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2111Service } from './experimental2111.service';

describe('Experimental2111Service', () => {
  let service: Experimental2111Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2111Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

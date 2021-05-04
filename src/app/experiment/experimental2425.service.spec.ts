import { TestBed } from '@angular/core/testing';

import { Experimental2425Service } from './experimental2425.service';

describe('Experimental2425Service', () => {
  let service: Experimental2425Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2425Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

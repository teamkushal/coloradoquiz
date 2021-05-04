import { TestBed } from '@angular/core/testing';

import { Experimental2407Service } from './experimental2407.service';

describe('Experimental2407Service', () => {
  let service: Experimental2407Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2407Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

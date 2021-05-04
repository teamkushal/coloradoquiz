import { TestBed } from '@angular/core/testing';

import { Experimental2529Service } from './experimental2529.service';

describe('Experimental2529Service', () => {
  let service: Experimental2529Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2529Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

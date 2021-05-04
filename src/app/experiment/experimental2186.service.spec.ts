import { TestBed } from '@angular/core/testing';

import { Experimental2186Service } from './experimental2186.service';

describe('Experimental2186Service', () => {
  let service: Experimental2186Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2186Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

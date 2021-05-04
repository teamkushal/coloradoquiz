import { TestBed } from '@angular/core/testing';

import { Experimental2509Service } from './experimental2509.service';

describe('Experimental2509Service', () => {
  let service: Experimental2509Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2509Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

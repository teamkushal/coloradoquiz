import { TestBed } from '@angular/core/testing';

import { Experimental2914Service } from './experimental2914.service';

describe('Experimental2914Service', () => {
  let service: Experimental2914Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2914Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2070Service } from './experimental2070.service';

describe('Experimental2070Service', () => {
  let service: Experimental2070Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2070Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

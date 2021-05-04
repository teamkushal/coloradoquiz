import { TestBed } from '@angular/core/testing';

import { Experimental2567Service } from './experimental2567.service';

describe('Experimental2567Service', () => {
  let service: Experimental2567Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2567Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

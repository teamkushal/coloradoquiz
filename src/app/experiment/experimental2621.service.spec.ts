import { TestBed } from '@angular/core/testing';

import { Experimental2621Service } from './experimental2621.service';

describe('Experimental2621Service', () => {
  let service: Experimental2621Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2621Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

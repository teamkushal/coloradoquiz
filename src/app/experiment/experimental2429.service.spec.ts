import { TestBed } from '@angular/core/testing';

import { Experimental2429Service } from './experimental2429.service';

describe('Experimental2429Service', () => {
  let service: Experimental2429Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2429Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

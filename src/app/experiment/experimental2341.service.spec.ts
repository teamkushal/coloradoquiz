import { TestBed } from '@angular/core/testing';

import { Experimental2341Service } from './experimental2341.service';

describe('Experimental2341Service', () => {
  let service: Experimental2341Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2341Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

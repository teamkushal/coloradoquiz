import { TestBed } from '@angular/core/testing';

import { Experimental2409Service } from './experimental2409.service';

describe('Experimental2409Service', () => {
  let service: Experimental2409Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2409Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2364Service } from './experimental2364.service';

describe('Experimental2364Service', () => {
  let service: Experimental2364Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2364Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

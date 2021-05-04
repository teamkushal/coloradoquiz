import { TestBed } from '@angular/core/testing';

import { Experimental2479Service } from './experimental2479.service';

describe('Experimental2479Service', () => {
  let service: Experimental2479Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2479Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

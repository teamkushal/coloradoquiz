import { TestBed } from '@angular/core/testing';

import { Experimental2384Service } from './experimental2384.service';

describe('Experimental2384Service', () => {
  let service: Experimental2384Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2384Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

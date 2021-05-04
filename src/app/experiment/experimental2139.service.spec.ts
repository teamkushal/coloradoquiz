import { TestBed } from '@angular/core/testing';

import { Experimental2139Service } from './experimental2139.service';

describe('Experimental2139Service', () => {
  let service: Experimental2139Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2139Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2411Service } from './experimental2411.service';

describe('Experimental2411Service', () => {
  let service: Experimental2411Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2411Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

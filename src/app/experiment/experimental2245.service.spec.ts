import { TestBed } from '@angular/core/testing';

import { Experimental2245Service } from './experimental2245.service';

describe('Experimental2245Service', () => {
  let service: Experimental2245Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2245Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

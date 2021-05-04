import { TestBed } from '@angular/core/testing';

import { Experimental2159Service } from './experimental2159.service';

describe('Experimental2159Service', () => {
  let service: Experimental2159Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2159Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

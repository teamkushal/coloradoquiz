import { TestBed } from '@angular/core/testing';

import { Experimental2560Service } from './experimental2560.service';

describe('Experimental2560Service', () => {
  let service: Experimental2560Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2560Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

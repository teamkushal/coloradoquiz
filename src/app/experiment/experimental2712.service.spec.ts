import { TestBed } from '@angular/core/testing';

import { Experimental2712Service } from './experimental2712.service';

describe('Experimental2712Service', () => {
  let service: Experimental2712Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2712Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

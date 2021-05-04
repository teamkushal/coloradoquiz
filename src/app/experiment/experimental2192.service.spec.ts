import { TestBed } from '@angular/core/testing';

import { Experimental2192Service } from './experimental2192.service';

describe('Experimental2192Service', () => {
  let service: Experimental2192Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2192Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

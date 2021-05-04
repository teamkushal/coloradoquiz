import { TestBed } from '@angular/core/testing';

import { Experimental2882Service } from './experimental2882.service';

describe('Experimental2882Service', () => {
  let service: Experimental2882Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2882Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2767Service } from './experimental2767.service';

describe('Experimental2767Service', () => {
  let service: Experimental2767Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2767Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

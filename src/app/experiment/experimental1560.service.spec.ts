import { TestBed } from '@angular/core/testing';

import { Experimental1560Service } from './experimental1560.service';

describe('Experimental1560Service', () => {
  let service: Experimental1560Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1560Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2188Service } from './experimental2188.service';

describe('Experimental2188Service', () => {
  let service: Experimental2188Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2188Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

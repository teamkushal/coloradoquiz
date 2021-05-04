import { TestBed } from '@angular/core/testing';

import { Experimental2447Service } from './experimental2447.service';

describe('Experimental2447Service', () => {
  let service: Experimental2447Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2447Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

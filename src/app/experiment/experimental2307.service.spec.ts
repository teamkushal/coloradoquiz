import { TestBed } from '@angular/core/testing';

import { Experimental2307Service } from './experimental2307.service';

describe('Experimental2307Service', () => {
  let service: Experimental2307Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2307Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

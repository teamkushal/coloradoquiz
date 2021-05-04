import { TestBed } from '@angular/core/testing';

import { Experimental2574Service } from './experimental2574.service';

describe('Experimental2574Service', () => {
  let service: Experimental2574Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2574Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

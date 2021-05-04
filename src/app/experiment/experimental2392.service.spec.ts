import { TestBed } from '@angular/core/testing';

import { Experimental2392Service } from './experimental2392.service';

describe('Experimental2392Service', () => {
  let service: Experimental2392Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2392Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

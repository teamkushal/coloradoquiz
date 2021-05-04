import { TestBed } from '@angular/core/testing';

import { Experimental2254Service } from './experimental2254.service';

describe('Experimental2254Service', () => {
  let service: Experimental2254Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2254Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

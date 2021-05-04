import { TestBed } from '@angular/core/testing';

import { Experimental2037Service } from './experimental2037.service';

describe('Experimental2037Service', () => {
  let service: Experimental2037Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2037Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

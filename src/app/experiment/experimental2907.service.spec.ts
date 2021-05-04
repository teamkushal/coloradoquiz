import { TestBed } from '@angular/core/testing';

import { Experimental2907Service } from './experimental2907.service';

describe('Experimental2907Service', () => {
  let service: Experimental2907Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2907Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

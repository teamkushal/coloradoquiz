import { TestBed } from '@angular/core/testing';

import { Experimental2570Service } from './experimental2570.service';

describe('Experimental2570Service', () => {
  let service: Experimental2570Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2570Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2559Service } from './experimental2559.service';

describe('Experimental2559Service', () => {
  let service: Experimental2559Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2559Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

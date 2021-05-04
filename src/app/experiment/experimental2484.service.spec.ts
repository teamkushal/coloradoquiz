import { TestBed } from '@angular/core/testing';

import { Experimental2484Service } from './experimental2484.service';

describe('Experimental2484Service', () => {
  let service: Experimental2484Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2484Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

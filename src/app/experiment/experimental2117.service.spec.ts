import { TestBed } from '@angular/core/testing';

import { Experimental2117Service } from './experimental2117.service';

describe('Experimental2117Service', () => {
  let service: Experimental2117Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2117Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

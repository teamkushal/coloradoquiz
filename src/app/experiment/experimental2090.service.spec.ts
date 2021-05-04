import { TestBed } from '@angular/core/testing';

import { Experimental2090Service } from './experimental2090.service';

describe('Experimental2090Service', () => {
  let service: Experimental2090Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2090Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

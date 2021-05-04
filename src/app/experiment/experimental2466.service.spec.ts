import { TestBed } from '@angular/core/testing';

import { Experimental2466Service } from './experimental2466.service';

describe('Experimental2466Service', () => {
  let service: Experimental2466Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2466Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

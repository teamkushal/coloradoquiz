import { TestBed } from '@angular/core/testing';

import { Experimental2999Service } from './experimental2999.service';

describe('Experimental2999Service', () => {
  let service: Experimental2999Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2999Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

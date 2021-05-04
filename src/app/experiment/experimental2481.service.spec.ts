import { TestBed } from '@angular/core/testing';

import { Experimental2481Service } from './experimental2481.service';

describe('Experimental2481Service', () => {
  let service: Experimental2481Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2481Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

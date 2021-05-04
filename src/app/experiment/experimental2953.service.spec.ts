import { TestBed } from '@angular/core/testing';

import { Experimental2953Service } from './experimental2953.service';

describe('Experimental2953Service', () => {
  let service: Experimental2953Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2953Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

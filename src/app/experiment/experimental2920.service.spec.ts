import { TestBed } from '@angular/core/testing';

import { Experimental2920Service } from './experimental2920.service';

describe('Experimental2920Service', () => {
  let service: Experimental2920Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2920Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

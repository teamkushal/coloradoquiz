import { TestBed } from '@angular/core/testing';

import { Experimental2462Service } from './experimental2462.service';

describe('Experimental2462Service', () => {
  let service: Experimental2462Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2462Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

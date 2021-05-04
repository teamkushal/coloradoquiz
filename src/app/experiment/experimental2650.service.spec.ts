import { TestBed } from '@angular/core/testing';

import { Experimental2650Service } from './experimental2650.service';

describe('Experimental2650Service', () => {
  let service: Experimental2650Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2650Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

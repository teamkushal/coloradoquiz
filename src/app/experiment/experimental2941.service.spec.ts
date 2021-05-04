import { TestBed } from '@angular/core/testing';

import { Experimental2941Service } from './experimental2941.service';

describe('Experimental2941Service', () => {
  let service: Experimental2941Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2941Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2080Service } from './experimental2080.service';

describe('Experimental2080Service', () => {
  let service: Experimental2080Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2080Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

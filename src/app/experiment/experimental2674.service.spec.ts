import { TestBed } from '@angular/core/testing';

import { Experimental2674Service } from './experimental2674.service';

describe('Experimental2674Service', () => {
  let service: Experimental2674Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2674Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

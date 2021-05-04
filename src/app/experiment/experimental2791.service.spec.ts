import { TestBed } from '@angular/core/testing';

import { Experimental2791Service } from './experimental2791.service';

describe('Experimental2791Service', () => {
  let service: Experimental2791Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2791Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

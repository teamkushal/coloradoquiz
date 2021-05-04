import { TestBed } from '@angular/core/testing';

import { Experimental2228Service } from './experimental2228.service';

describe('Experimental2228Service', () => {
  let service: Experimental2228Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2228Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

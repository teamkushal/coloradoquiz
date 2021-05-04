import { TestBed } from '@angular/core/testing';

import { Experimental2523Service } from './experimental2523.service';

describe('Experimental2523Service', () => {
  let service: Experimental2523Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2523Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

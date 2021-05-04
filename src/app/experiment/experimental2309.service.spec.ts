import { TestBed } from '@angular/core/testing';

import { Experimental2309Service } from './experimental2309.service';

describe('Experimental2309Service', () => {
  let service: Experimental2309Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2309Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

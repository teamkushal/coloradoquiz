import { TestBed } from '@angular/core/testing';

import { Experimental309Service } from './experimental309.service';

describe('Experimental309Service', () => {
  let service: Experimental309Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental309Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

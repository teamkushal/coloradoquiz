import { TestBed } from '@angular/core/testing';

import { Experimental152Service } from './experimental152.service';

describe('Experimental152Service', () => {
  let service: Experimental152Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental152Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

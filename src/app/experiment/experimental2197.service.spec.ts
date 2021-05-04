import { TestBed } from '@angular/core/testing';

import { Experimental2197Service } from './experimental2197.service';

describe('Experimental2197Service', () => {
  let service: Experimental2197Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2197Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

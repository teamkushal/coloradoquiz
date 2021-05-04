import { TestBed } from '@angular/core/testing';

import { Experimental199Service } from './experimental199.service';

describe('Experimental199Service', () => {
  let service: Experimental199Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental199Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

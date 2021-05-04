import { TestBed } from '@angular/core/testing';

import { Experimental593Service } from './experimental593.service';

describe('Experimental593Service', () => {
  let service: Experimental593Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental593Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

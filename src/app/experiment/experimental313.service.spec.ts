import { TestBed } from '@angular/core/testing';

import { Experimental313Service } from './experimental313.service';

describe('Experimental313Service', () => {
  let service: Experimental313Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental313Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

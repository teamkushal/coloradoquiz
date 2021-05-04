import { TestBed } from '@angular/core/testing';

import { Experimental960Service } from './experimental960.service';

describe('Experimental960Service', () => {
  let service: Experimental960Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental960Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

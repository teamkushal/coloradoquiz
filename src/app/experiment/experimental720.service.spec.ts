import { TestBed } from '@angular/core/testing';

import { Experimental720Service } from './experimental720.service';

describe('Experimental720Service', () => {
  let service: Experimental720Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental720Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

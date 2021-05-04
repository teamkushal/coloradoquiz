import { TestBed } from '@angular/core/testing';

import { Experimental873Service } from './experimental873.service';

describe('Experimental873Service', () => {
  let service: Experimental873Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental873Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

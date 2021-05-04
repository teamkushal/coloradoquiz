import { TestBed } from '@angular/core/testing';

import { Experimental943Service } from './experimental943.service';

describe('Experimental943Service', () => {
  let service: Experimental943Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental943Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

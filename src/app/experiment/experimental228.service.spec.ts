import { TestBed } from '@angular/core/testing';

import { Experimental228Service } from './experimental228.service';

describe('Experimental228Service', () => {
  let service: Experimental228Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental228Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

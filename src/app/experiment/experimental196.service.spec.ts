import { TestBed } from '@angular/core/testing';

import { Experimental196Service } from './experimental196.service';

describe('Experimental196Service', () => {
  let service: Experimental196Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental196Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

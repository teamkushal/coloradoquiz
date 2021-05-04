import { TestBed } from '@angular/core/testing';

import { Experimental891Service } from './experimental891.service';

describe('Experimental891Service', () => {
  let service: Experimental891Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental891Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

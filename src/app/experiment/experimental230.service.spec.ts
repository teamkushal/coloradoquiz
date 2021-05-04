import { TestBed } from '@angular/core/testing';

import { Experimental230Service } from './experimental230.service';

describe('Experimental230Service', () => {
  let service: Experimental230Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental230Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

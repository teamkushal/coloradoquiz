import { TestBed } from '@angular/core/testing';

import { Experimental339Service } from './experimental339.service';

describe('Experimental339Service', () => {
  let service: Experimental339Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental339Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2260Service } from './experimental2260.service';

describe('Experimental2260Service', () => {
  let service: Experimental2260Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2260Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

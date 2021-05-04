import { TestBed } from '@angular/core/testing';

import { Experimental2141Service } from './experimental2141.service';

describe('Experimental2141Service', () => {
  let service: Experimental2141Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2141Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

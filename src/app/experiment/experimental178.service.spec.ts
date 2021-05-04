import { TestBed } from '@angular/core/testing';

import { Experimental178Service } from './experimental178.service';

describe('Experimental178Service', () => {
  let service: Experimental178Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental178Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

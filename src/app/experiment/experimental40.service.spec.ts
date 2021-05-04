import { TestBed } from '@angular/core/testing';

import { Experimental40Service } from './experimental40.service';

describe('Experimental40Service', () => {
  let service: Experimental40Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental40Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

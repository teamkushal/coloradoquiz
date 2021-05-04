import { TestBed } from '@angular/core/testing';

import { Experimental2295Service } from './experimental2295.service';

describe('Experimental2295Service', () => {
  let service: Experimental2295Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2295Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2804Service } from './experimental2804.service';

describe('Experimental2804Service', () => {
  let service: Experimental2804Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2804Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

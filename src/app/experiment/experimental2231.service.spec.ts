import { TestBed } from '@angular/core/testing';

import { Experimental2231Service } from './experimental2231.service';

describe('Experimental2231Service', () => {
  let service: Experimental2231Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2231Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

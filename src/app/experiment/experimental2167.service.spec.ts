import { TestBed } from '@angular/core/testing';

import { Experimental2167Service } from './experimental2167.service';

describe('Experimental2167Service', () => {
  let service: Experimental2167Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2167Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

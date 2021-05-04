import { TestBed } from '@angular/core/testing';

import { Experimental2464Service } from './experimental2464.service';

describe('Experimental2464Service', () => {
  let service: Experimental2464Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2464Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

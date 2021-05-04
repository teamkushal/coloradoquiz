import { TestBed } from '@angular/core/testing';

import { Experimental2753Service } from './experimental2753.service';

describe('Experimental2753Service', () => {
  let service: Experimental2753Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2753Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

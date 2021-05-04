import { TestBed } from '@angular/core/testing';

import { Experimental2733Service } from './experimental2733.service';

describe('Experimental2733Service', () => {
  let service: Experimental2733Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2733Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

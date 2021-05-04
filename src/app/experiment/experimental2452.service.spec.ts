import { TestBed } from '@angular/core/testing';

import { Experimental2452Service } from './experimental2452.service';

describe('Experimental2452Service', () => {
  let service: Experimental2452Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2452Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

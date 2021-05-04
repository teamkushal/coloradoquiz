import { TestBed } from '@angular/core/testing';

import { Experimental2880Service } from './experimental2880.service';

describe('Experimental2880Service', () => {
  let service: Experimental2880Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2880Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

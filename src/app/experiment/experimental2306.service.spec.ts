import { TestBed } from '@angular/core/testing';

import { Experimental2306Service } from './experimental2306.service';

describe('Experimental2306Service', () => {
  let service: Experimental2306Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2306Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

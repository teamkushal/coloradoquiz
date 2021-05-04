import { TestBed } from '@angular/core/testing';

import { Experimental2106Service } from './experimental2106.service';

describe('Experimental2106Service', () => {
  let service: Experimental2106Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2106Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

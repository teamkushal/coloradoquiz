import { TestBed } from '@angular/core/testing';

import { Experimental2615Service } from './experimental2615.service';

describe('Experimental2615Service', () => {
  let service: Experimental2615Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2615Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

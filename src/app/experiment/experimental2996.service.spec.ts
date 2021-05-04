import { TestBed } from '@angular/core/testing';

import { Experimental2996Service } from './experimental2996.service';

describe('Experimental2996Service', () => {
  let service: Experimental2996Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2996Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2925Service } from './experimental2925.service';

describe('Experimental2925Service', () => {
  let service: Experimental2925Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2925Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

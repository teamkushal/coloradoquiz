import { TestBed } from '@angular/core/testing';

import { Experimental2990Service } from './experimental2990.service';

describe('Experimental2990Service', () => {
  let service: Experimental2990Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2990Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

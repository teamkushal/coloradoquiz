import { TestBed } from '@angular/core/testing';

import { Experimental990Service } from './experimental990.service';

describe('Experimental990Service', () => {
  let service: Experimental990Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental990Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

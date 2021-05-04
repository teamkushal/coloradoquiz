import { TestBed } from '@angular/core/testing';

import { Experimental2774Service } from './experimental2774.service';

describe('Experimental2774Service', () => {
  let service: Experimental2774Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2774Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

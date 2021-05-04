import { TestBed } from '@angular/core/testing';

import { Experimental2965Service } from './experimental2965.service';

describe('Experimental2965Service', () => {
  let service: Experimental2965Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2965Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

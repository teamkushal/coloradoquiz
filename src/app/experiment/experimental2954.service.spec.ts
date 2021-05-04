import { TestBed } from '@angular/core/testing';

import { Experimental2954Service } from './experimental2954.service';

describe('Experimental2954Service', () => {
  let service: Experimental2954Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2954Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

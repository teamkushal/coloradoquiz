import { TestBed } from '@angular/core/testing';

import { Experimental2173Service } from './experimental2173.service';

describe('Experimental2173Service', () => {
  let service: Experimental2173Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2173Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

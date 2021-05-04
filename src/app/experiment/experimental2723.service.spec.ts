import { TestBed } from '@angular/core/testing';

import { Experimental2723Service } from './experimental2723.service';

describe('Experimental2723Service', () => {
  let service: Experimental2723Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2723Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

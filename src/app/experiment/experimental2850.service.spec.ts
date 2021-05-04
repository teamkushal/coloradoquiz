import { TestBed } from '@angular/core/testing';

import { Experimental2850Service } from './experimental2850.service';

describe('Experimental2850Service', () => {
  let service: Experimental2850Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2850Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

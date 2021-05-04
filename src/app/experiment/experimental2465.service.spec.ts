import { TestBed } from '@angular/core/testing';

import { Experimental2465Service } from './experimental2465.service';

describe('Experimental2465Service', () => {
  let service: Experimental2465Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2465Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2846Service } from './experimental2846.service';

describe('Experimental2846Service', () => {
  let service: Experimental2846Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2846Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

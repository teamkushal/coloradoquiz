import { TestBed } from '@angular/core/testing';

import { Experimental2814Service } from './experimental2814.service';

describe('Experimental2814Service', () => {
  let service: Experimental2814Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2814Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

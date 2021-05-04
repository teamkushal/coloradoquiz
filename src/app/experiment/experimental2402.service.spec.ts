import { TestBed } from '@angular/core/testing';

import { Experimental2402Service } from './experimental2402.service';

describe('Experimental2402Service', () => {
  let service: Experimental2402Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2402Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

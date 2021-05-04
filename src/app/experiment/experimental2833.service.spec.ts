import { TestBed } from '@angular/core/testing';

import { Experimental2833Service } from './experimental2833.service';

describe('Experimental2833Service', () => {
  let service: Experimental2833Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2833Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

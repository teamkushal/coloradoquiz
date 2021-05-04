import { TestBed } from '@angular/core/testing';

import { Experimental2477Service } from './experimental2477.service';

describe('Experimental2477Service', () => {
  let service: Experimental2477Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2477Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2520Service } from './experimental2520.service';

describe('Experimental2520Service', () => {
  let service: Experimental2520Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2520Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

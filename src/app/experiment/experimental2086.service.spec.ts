import { TestBed } from '@angular/core/testing';

import { Experimental2086Service } from './experimental2086.service';

describe('Experimental2086Service', () => {
  let service: Experimental2086Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2086Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

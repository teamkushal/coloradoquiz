import { TestBed } from '@angular/core/testing';

import { Experimental2877Service } from './experimental2877.service';

describe('Experimental2877Service', () => {
  let service: Experimental2877Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2877Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

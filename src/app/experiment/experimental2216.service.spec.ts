import { TestBed } from '@angular/core/testing';

import { Experimental2216Service } from './experimental2216.service';

describe('Experimental2216Service', () => {
  let service: Experimental2216Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2216Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

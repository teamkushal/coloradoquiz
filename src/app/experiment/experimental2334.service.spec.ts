import { TestBed } from '@angular/core/testing';

import { Experimental2334Service } from './experimental2334.service';

describe('Experimental2334Service', () => {
  let service: Experimental2334Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2334Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2741Service } from './experimental2741.service';

describe('Experimental2741Service', () => {
  let service: Experimental2741Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2741Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

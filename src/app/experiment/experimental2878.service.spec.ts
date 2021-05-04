import { TestBed } from '@angular/core/testing';

import { Experimental2878Service } from './experimental2878.service';

describe('Experimental2878Service', () => {
  let service: Experimental2878Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2878Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

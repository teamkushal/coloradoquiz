import { TestBed } from '@angular/core/testing';

import { Experimental2624Service } from './experimental2624.service';

describe('Experimental2624Service', () => {
  let service: Experimental2624Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2624Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

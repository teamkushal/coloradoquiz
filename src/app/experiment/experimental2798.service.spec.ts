import { TestBed } from '@angular/core/testing';

import { Experimental2798Service } from './experimental2798.service';

describe('Experimental2798Service', () => {
  let service: Experimental2798Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2798Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

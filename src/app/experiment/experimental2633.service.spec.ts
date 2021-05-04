import { TestBed } from '@angular/core/testing';

import { Experimental2633Service } from './experimental2633.service';

describe('Experimental2633Service', () => {
  let service: Experimental2633Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2633Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

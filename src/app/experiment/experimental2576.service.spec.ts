import { TestBed } from '@angular/core/testing';

import { Experimental2576Service } from './experimental2576.service';

describe('Experimental2576Service', () => {
  let service: Experimental2576Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2576Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2676Service } from './experimental2676.service';

describe('Experimental2676Service', () => {
  let service: Experimental2676Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2676Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2937Service } from './experimental2937.service';

describe('Experimental2937Service', () => {
  let service: Experimental2937Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2937Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

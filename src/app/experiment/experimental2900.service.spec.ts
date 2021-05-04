import { TestBed } from '@angular/core/testing';

import { Experimental2900Service } from './experimental2900.service';

describe('Experimental2900Service', () => {
  let service: Experimental2900Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2900Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

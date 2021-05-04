import { TestBed } from '@angular/core/testing';

import { Experimental2680Service } from './experimental2680.service';

describe('Experimental2680Service', () => {
  let service: Experimental2680Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2680Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

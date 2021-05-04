import { TestBed } from '@angular/core/testing';

import { Experimental2505Service } from './experimental2505.service';

describe('Experimental2505Service', () => {
  let service: Experimental2505Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2505Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

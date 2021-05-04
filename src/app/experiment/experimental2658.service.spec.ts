import { TestBed } from '@angular/core/testing';

import { Experimental2658Service } from './experimental2658.service';

describe('Experimental2658Service', () => {
  let service: Experimental2658Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2658Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

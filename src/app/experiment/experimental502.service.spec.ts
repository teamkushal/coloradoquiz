import { TestBed } from '@angular/core/testing';

import { Experimental502Service } from './experimental502.service';

describe('Experimental502Service', () => {
  let service: Experimental502Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental502Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

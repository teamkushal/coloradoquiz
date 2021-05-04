import { TestBed } from '@angular/core/testing';

import { Experimental377Service } from './experimental377.service';

describe('Experimental377Service', () => {
  let service: Experimental377Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental377Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

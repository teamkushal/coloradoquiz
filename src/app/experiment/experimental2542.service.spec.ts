import { TestBed } from '@angular/core/testing';

import { Experimental2542Service } from './experimental2542.service';

describe('Experimental2542Service', () => {
  let service: Experimental2542Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2542Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

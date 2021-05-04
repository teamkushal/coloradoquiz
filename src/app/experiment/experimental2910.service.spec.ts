import { TestBed } from '@angular/core/testing';

import { Experimental2910Service } from './experimental2910.service';

describe('Experimental2910Service', () => {
  let service: Experimental2910Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2910Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

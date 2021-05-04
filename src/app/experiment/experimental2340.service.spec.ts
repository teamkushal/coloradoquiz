import { TestBed } from '@angular/core/testing';

import { Experimental2340Service } from './experimental2340.service';

describe('Experimental2340Service', () => {
  let service: Experimental2340Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2340Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

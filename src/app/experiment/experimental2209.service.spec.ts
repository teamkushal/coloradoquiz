import { TestBed } from '@angular/core/testing';

import { Experimental2209Service } from './experimental2209.service';

describe('Experimental2209Service', () => {
  let service: Experimental2209Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2209Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

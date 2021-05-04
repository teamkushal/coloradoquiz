import { TestBed } from '@angular/core/testing';

import { Experimental2684Service } from './experimental2684.service';

describe('Experimental2684Service', () => {
  let service: Experimental2684Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2684Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

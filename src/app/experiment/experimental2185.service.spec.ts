import { TestBed } from '@angular/core/testing';

import { Experimental2185Service } from './experimental2185.service';

describe('Experimental2185Service', () => {
  let service: Experimental2185Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2185Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

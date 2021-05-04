import { TestBed } from '@angular/core/testing';

import { Experimental2143Service } from './experimental2143.service';

describe('Experimental2143Service', () => {
  let service: Experimental2143Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2143Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

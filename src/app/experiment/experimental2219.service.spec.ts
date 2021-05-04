import { TestBed } from '@angular/core/testing';

import { Experimental2219Service } from './experimental2219.service';

describe('Experimental2219Service', () => {
  let service: Experimental2219Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2219Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2795Service } from './experimental2795.service';

describe('Experimental2795Service', () => {
  let service: Experimental2795Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2795Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

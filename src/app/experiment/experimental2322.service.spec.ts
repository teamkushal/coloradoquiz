import { TestBed } from '@angular/core/testing';

import { Experimental2322Service } from './experimental2322.service';

describe('Experimental2322Service', () => {
  let service: Experimental2322Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2322Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

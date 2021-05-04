import { TestBed } from '@angular/core/testing';

import { Experimental2889Service } from './experimental2889.service';

describe('Experimental2889Service', () => {
  let service: Experimental2889Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2889Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental2172Service } from './experimental2172.service';

describe('Experimental2172Service', () => {
  let service: Experimental2172Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2172Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

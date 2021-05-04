import { TestBed } from '@angular/core/testing';

import { Experimental2802Service } from './experimental2802.service';

describe('Experimental2802Service', () => {
  let service: Experimental2802Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2802Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

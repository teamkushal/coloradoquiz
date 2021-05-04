import { TestBed } from '@angular/core/testing';

import { Experimental2451Service } from './experimental2451.service';

describe('Experimental2451Service', () => {
  let service: Experimental2451Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2451Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

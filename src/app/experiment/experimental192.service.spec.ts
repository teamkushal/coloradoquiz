import { TestBed } from '@angular/core/testing';

import { Experimental192Service } from './experimental192.service';

describe('Experimental192Service', () => {
  let service: Experimental192Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental192Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

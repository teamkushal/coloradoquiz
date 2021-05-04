import { TestBed } from '@angular/core/testing';

import { Experimental2693Service } from './experimental2693.service';

describe('Experimental2693Service', () => {
  let service: Experimental2693Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2693Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental1949Service } from './experimental1949.service';

describe('Experimental1949Service', () => {
  let service: Experimental1949Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1949Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

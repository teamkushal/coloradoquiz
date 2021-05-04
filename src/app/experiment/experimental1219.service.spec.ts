import { TestBed } from '@angular/core/testing';

import { Experimental1219Service } from './experimental1219.service';

describe('Experimental1219Service', () => {
  let service: Experimental1219Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1219Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental1214Service } from './experimental1214.service';

describe('Experimental1214Service', () => {
  let service: Experimental1214Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1214Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

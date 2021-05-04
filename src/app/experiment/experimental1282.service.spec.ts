import { TestBed } from '@angular/core/testing';

import { Experimental1282Service } from './experimental1282.service';

describe('Experimental1282Service', () => {
  let service: Experimental1282Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1282Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

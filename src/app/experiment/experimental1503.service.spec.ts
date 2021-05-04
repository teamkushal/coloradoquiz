import { TestBed } from '@angular/core/testing';

import { Experimental1503Service } from './experimental1503.service';

describe('Experimental1503Service', () => {
  let service: Experimental1503Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1503Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

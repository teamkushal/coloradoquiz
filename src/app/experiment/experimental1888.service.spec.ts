import { TestBed } from '@angular/core/testing';

import { Experimental1888Service } from './experimental1888.service';

describe('Experimental1888Service', () => {
  let service: Experimental1888Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1888Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

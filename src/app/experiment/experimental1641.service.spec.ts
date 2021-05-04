import { TestBed } from '@angular/core/testing';

import { Experimental1641Service } from './experimental1641.service';

describe('Experimental1641Service', () => {
  let service: Experimental1641Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1641Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

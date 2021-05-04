import { TestBed } from '@angular/core/testing';

import { Experimental1260Service } from './experimental1260.service';

describe('Experimental1260Service', () => {
  let service: Experimental1260Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1260Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

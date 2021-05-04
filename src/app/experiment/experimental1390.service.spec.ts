import { TestBed } from '@angular/core/testing';

import { Experimental1390Service } from './experimental1390.service';

describe('Experimental1390Service', () => {
  let service: Experimental1390Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1390Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental1370Service } from './experimental1370.service';

describe('Experimental1370Service', () => {
  let service: Experimental1370Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1370Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

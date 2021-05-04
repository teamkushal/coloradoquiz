import { TestBed } from '@angular/core/testing';

import { Experimental1378Service } from './experimental1378.service';

describe('Experimental1378Service', () => {
  let service: Experimental1378Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1378Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

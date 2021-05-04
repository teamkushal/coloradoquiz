import { TestBed } from '@angular/core/testing';

import { Experimental1491Service } from './experimental1491.service';

describe('Experimental1491Service', () => {
  let service: Experimental1491Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1491Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

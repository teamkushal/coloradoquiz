import { TestBed } from '@angular/core/testing';

import { Experimental1695Service } from './experimental1695.service';

describe('Experimental1695Service', () => {
  let service: Experimental1695Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1695Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

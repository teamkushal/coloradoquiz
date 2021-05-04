import { TestBed } from '@angular/core/testing';

import { Experimental1410Service } from './experimental1410.service';

describe('Experimental1410Service', () => {
  let service: Experimental1410Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1410Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

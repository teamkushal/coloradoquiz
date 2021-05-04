import { TestBed } from '@angular/core/testing';

import { Experimental1373Service } from './experimental1373.service';

describe('Experimental1373Service', () => {
  let service: Experimental1373Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1373Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

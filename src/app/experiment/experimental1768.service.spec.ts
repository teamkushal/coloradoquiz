import { TestBed } from '@angular/core/testing';

import { Experimental1768Service } from './experimental1768.service';

describe('Experimental1768Service', () => {
  let service: Experimental1768Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1768Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

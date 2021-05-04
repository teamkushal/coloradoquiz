import { TestBed } from '@angular/core/testing';

import { Experimental1751Service } from './experimental1751.service';

describe('Experimental1751Service', () => {
  let service: Experimental1751Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1751Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

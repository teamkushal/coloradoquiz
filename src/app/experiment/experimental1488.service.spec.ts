import { TestBed } from '@angular/core/testing';

import { Experimental1488Service } from './experimental1488.service';

describe('Experimental1488Service', () => {
  let service: Experimental1488Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1488Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

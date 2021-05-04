import { TestBed } from '@angular/core/testing';

import { Experimental1320Service } from './experimental1320.service';

describe('Experimental1320Service', () => {
  let service: Experimental1320Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1320Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

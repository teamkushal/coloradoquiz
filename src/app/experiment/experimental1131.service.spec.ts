import { TestBed } from '@angular/core/testing';

import { Experimental1131Service } from './experimental1131.service';

describe('Experimental1131Service', () => {
  let service: Experimental1131Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1131Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

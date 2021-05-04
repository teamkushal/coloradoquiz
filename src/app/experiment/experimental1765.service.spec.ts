import { TestBed } from '@angular/core/testing';

import { Experimental1765Service } from './experimental1765.service';

describe('Experimental1765Service', () => {
  let service: Experimental1765Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1765Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

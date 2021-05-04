import { TestBed } from '@angular/core/testing';

import { Experimental1442Service } from './experimental1442.service';

describe('Experimental1442Service', () => {
  let service: Experimental1442Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1442Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

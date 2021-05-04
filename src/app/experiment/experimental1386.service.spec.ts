import { TestBed } from '@angular/core/testing';

import { Experimental1386Service } from './experimental1386.service';

describe('Experimental1386Service', () => {
  let service: Experimental1386Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1386Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

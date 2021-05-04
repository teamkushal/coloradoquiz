import { TestBed } from '@angular/core/testing';

import { Experimental1335Service } from './experimental1335.service';

describe('Experimental1335Service', () => {
  let service: Experimental1335Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1335Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

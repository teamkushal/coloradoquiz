import { TestBed } from '@angular/core/testing';

import { Experimental1383Service } from './experimental1383.service';

describe('Experimental1383Service', () => {
  let service: Experimental1383Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1383Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

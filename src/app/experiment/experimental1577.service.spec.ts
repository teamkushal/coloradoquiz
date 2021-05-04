import { TestBed } from '@angular/core/testing';

import { Experimental1577Service } from './experimental1577.service';

describe('Experimental1577Service', () => {
  let service: Experimental1577Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1577Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

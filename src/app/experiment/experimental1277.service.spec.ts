import { TestBed } from '@angular/core/testing';

import { Experimental1277Service } from './experimental1277.service';

describe('Experimental1277Service', () => {
  let service: Experimental1277Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1277Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

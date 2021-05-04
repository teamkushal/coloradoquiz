import { TestBed } from '@angular/core/testing';

import { Experimental1147Service } from './experimental1147.service';

describe('Experimental1147Service', () => {
  let service: Experimental1147Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1147Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

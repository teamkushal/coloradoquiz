import { TestBed } from '@angular/core/testing';

import { Experimental1187Service } from './experimental1187.service';

describe('Experimental1187Service', () => {
  let service: Experimental1187Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1187Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

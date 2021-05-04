import { TestBed } from '@angular/core/testing';

import { Experimental1347Service } from './experimental1347.service';

describe('Experimental1347Service', () => {
  let service: Experimental1347Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1347Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

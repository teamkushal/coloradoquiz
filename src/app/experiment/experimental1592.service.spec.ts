import { TestBed } from '@angular/core/testing';

import { Experimental1592Service } from './experimental1592.service';

describe('Experimental1592Service', () => {
  let service: Experimental1592Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1592Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

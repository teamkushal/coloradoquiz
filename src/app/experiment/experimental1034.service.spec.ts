import { TestBed } from '@angular/core/testing';

import { Experimental1034Service } from './experimental1034.service';

describe('Experimental1034Service', () => {
  let service: Experimental1034Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1034Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

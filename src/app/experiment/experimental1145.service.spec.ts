import { TestBed } from '@angular/core/testing';

import { Experimental1145Service } from './experimental1145.service';

describe('Experimental1145Service', () => {
  let service: Experimental1145Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1145Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

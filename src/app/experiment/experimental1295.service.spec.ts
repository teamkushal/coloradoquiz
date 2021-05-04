import { TestBed } from '@angular/core/testing';

import { Experimental1295Service } from './experimental1295.service';

describe('Experimental1295Service', () => {
  let service: Experimental1295Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1295Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

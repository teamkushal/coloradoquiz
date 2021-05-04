import { TestBed } from '@angular/core/testing';

import { Experimental1764Service } from './experimental1764.service';

describe('Experimental1764Service', () => {
  let service: Experimental1764Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1764Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

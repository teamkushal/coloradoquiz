import { TestBed } from '@angular/core/testing';

import { Experimental1692Service } from './experimental1692.service';

describe('Experimental1692Service', () => {
  let service: Experimental1692Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1692Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

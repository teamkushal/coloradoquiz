import { TestBed } from '@angular/core/testing';

import { Experimental1511Service } from './experimental1511.service';

describe('Experimental1511Service', () => {
  let service: Experimental1511Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1511Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

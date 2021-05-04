import { TestBed } from '@angular/core/testing';

import { Experimental1727Service } from './experimental1727.service';

describe('Experimental1727Service', () => {
  let service: Experimental1727Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1727Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

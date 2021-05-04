import { TestBed } from '@angular/core/testing';

import { Experimental1553Service } from './experimental1553.service';

describe('Experimental1553Service', () => {
  let service: Experimental1553Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1553Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

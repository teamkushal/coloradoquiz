import { TestBed } from '@angular/core/testing';

import { Experimental1782Service } from './experimental1782.service';

describe('Experimental1782Service', () => {
  let service: Experimental1782Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1782Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

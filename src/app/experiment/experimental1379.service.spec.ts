import { TestBed } from '@angular/core/testing';

import { Experimental1379Service } from './experimental1379.service';

describe('Experimental1379Service', () => {
  let service: Experimental1379Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1379Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

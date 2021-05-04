import { TestBed } from '@angular/core/testing';

import { Experimental1218Service } from './experimental1218.service';

describe('Experimental1218Service', () => {
  let service: Experimental1218Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1218Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

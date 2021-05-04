import { TestBed } from '@angular/core/testing';

import { Experimental1669Service } from './experimental1669.service';

describe('Experimental1669Service', () => {
  let service: Experimental1669Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1669Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

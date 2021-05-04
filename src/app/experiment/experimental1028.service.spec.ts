import { TestBed } from '@angular/core/testing';

import { Experimental1028Service } from './experimental1028.service';

describe('Experimental1028Service', () => {
  let service: Experimental1028Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1028Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

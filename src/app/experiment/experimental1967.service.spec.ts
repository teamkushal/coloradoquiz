import { TestBed } from '@angular/core/testing';

import { Experimental1967Service } from './experimental1967.service';

describe('Experimental1967Service', () => {
  let service: Experimental1967Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1967Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

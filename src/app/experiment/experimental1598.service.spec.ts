import { TestBed } from '@angular/core/testing';

import { Experimental1598Service } from './experimental1598.service';

describe('Experimental1598Service', () => {
  let service: Experimental1598Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1598Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental1536Service } from './experimental1536.service';

describe('Experimental1536Service', () => {
  let service: Experimental1536Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1536Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

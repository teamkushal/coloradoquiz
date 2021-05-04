import { TestBed } from '@angular/core/testing';

import { Experimental1231Service } from './experimental1231.service';

describe('Experimental1231Service', () => {
  let service: Experimental1231Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1231Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

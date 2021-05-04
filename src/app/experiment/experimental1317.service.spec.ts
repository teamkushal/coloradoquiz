import { TestBed } from '@angular/core/testing';

import { Experimental1317Service } from './experimental1317.service';

describe('Experimental1317Service', () => {
  let service: Experimental1317Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1317Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

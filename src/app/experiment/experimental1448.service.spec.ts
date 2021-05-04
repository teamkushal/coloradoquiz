import { TestBed } from '@angular/core/testing';

import { Experimental1448Service } from './experimental1448.service';

describe('Experimental1448Service', () => {
  let service: Experimental1448Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1448Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

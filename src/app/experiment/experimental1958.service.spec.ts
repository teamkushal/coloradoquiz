import { TestBed } from '@angular/core/testing';

import { Experimental1958Service } from './experimental1958.service';

describe('Experimental1958Service', () => {
  let service: Experimental1958Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1958Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

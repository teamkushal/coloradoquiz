import { TestBed } from '@angular/core/testing';

import { Experimental1362Service } from './experimental1362.service';

describe('Experimental1362Service', () => {
  let service: Experimental1362Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1362Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

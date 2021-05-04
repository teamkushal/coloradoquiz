import { TestBed } from '@angular/core/testing';

import { Experimental1889Service } from './experimental1889.service';

describe('Experimental1889Service', () => {
  let service: Experimental1889Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1889Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

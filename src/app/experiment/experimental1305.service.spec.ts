import { TestBed } from '@angular/core/testing';

import { Experimental1305Service } from './experimental1305.service';

describe('Experimental1305Service', () => {
  let service: Experimental1305Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1305Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

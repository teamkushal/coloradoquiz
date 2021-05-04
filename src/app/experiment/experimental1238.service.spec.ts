import { TestBed } from '@angular/core/testing';

import { Experimental1238Service } from './experimental1238.service';

describe('Experimental1238Service', () => {
  let service: Experimental1238Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1238Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

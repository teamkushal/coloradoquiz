import { TestBed } from '@angular/core/testing';

import { Experimental1013Service } from './experimental1013.service';

describe('Experimental1013Service', () => {
  let service: Experimental1013Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1013Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental1015Service } from './experimental1015.service';

describe('Experimental1015Service', () => {
  let service: Experimental1015Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1015Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental1110Service } from './experimental1110.service';

describe('Experimental1110Service', () => {
  let service: Experimental1110Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1110Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

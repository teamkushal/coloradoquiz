import { TestBed } from '@angular/core/testing';

import { Experimental1730Service } from './experimental1730.service';

describe('Experimental1730Service', () => {
  let service: Experimental1730Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1730Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

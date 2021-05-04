import { TestBed } from '@angular/core/testing';

import { Experimental1833Service } from './experimental1833.service';

describe('Experimental1833Service', () => {
  let service: Experimental1833Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1833Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental1781Service } from './experimental1781.service';

describe('Experimental1781Service', () => {
  let service: Experimental1781Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1781Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

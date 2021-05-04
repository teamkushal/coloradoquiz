import { TestBed } from '@angular/core/testing';

import { Experimental1994Service } from './experimental1994.service';

describe('Experimental1994Service', () => {
  let service: Experimental1994Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1994Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

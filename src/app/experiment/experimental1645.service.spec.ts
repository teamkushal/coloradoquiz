import { TestBed } from '@angular/core/testing';

import { Experimental1645Service } from './experimental1645.service';

describe('Experimental1645Service', () => {
  let service: Experimental1645Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1645Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

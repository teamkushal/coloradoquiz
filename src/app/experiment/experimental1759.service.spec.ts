import { TestBed } from '@angular/core/testing';

import { Experimental1759Service } from './experimental1759.service';

describe('Experimental1759Service', () => {
  let service: Experimental1759Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1759Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

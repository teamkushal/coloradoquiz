import { TestBed } from '@angular/core/testing';

import { Experimental1895Service } from './experimental1895.service';

describe('Experimental1895Service', () => {
  let service: Experimental1895Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1895Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Experimental1795Service } from './experimental1795.service';

describe('Experimental1795Service', () => {
  let service: Experimental1795Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1795Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

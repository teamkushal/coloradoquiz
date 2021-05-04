import { TestBed } from '@angular/core/testing';

import { Experimental1715Service } from './experimental1715.service';

describe('Experimental1715Service', () => {
  let service: Experimental1715Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1715Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
